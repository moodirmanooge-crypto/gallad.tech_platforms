import { db, storage } from "./firebaseConfig";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

/**
 * Shared Firestore helpers for the three homepage-editable sections:
 *  - "services"        (Our Services)
 *  - "pricingPlans"     (Our Pricing)
 *  - "featuredProjects" (Featured Projects)
 *
 * Every document has a numeric "order" field used to control display
 * position across both the public website and the admin manager.
 */

// Live-subscribe to a collection, ordered by "order" ascending.
export function subscribeToCollection(collectionName, callback) {
  const q = query(
    collection(db, collectionName),
    orderBy("order", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    callback(items);
  });
}

// Add a new document; assigns it to the end of the current order.
export async function addItem(collectionName, data, currentCount) {
  return addDoc(collection(db, collectionName), {
    ...data,
    order: currentCount,
  });
}

// Update an existing document by id.
export async function updateItem(collectionName, id, data) {
  return updateDoc(doc(db, collectionName, id), data);
}

// Delete a document by id.
export async function deleteItem(collectionName, id) {
  return deleteDoc(doc(db, collectionName, id));
}

// Swap the "order" field of two items (used for move up / move down).
// Both writes are dispatched together so Firestore's live listener only
// re-renders once the swap is fully applied, instead of flashing an
// inconsistent order mid-swap.
export async function swapOrder(collectionName, itemA, itemB) {
  await Promise.all([
    updateDoc(doc(db, collectionName, itemA.id), {
      order: itemB.order,
    }),
    updateDoc(doc(db, collectionName, itemB.id), {
      order: itemA.order,
    }),
  ]);
}

// Upload an image file to Firebase Storage and return its public URL.
export async function uploadImage(file, folder = "featuredProjects") {
  const safeName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
  const storageRef = ref(storage, `${folder}/${safeName}`);

  await uploadBytes(storageRef, file);

  return getDownloadURL(storageRef);
}