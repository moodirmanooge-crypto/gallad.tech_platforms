import { db } from "../firebase/firebaseConfig";

import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const clientsRef = collection(db, "contacts");

// LIVE DATA
export const subscribeClients = (callback) => {
  return onSnapshot(clientsRef, (snapshot) => {
    const data = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    callback(data);
  });
};

// DELETE
export const deleteClient = async (id) => {
  await deleteDoc(doc(db, "contacts", id));
};

// UPDATE STATUS
export const updateClientStatus = async (id, status) => {
  await updateDoc(doc(db, "contacts", id), {
    status,
  });
};