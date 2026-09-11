import { db } from "./firebaseConfig";
import {
  doc,
  onSnapshot,
  setDoc,
  increment,
  collection,
  addDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

/**
 * Public engagement helpers for Portfolio page media items (Project
 * Gallery, Awards & Certificates, Trusted Clients). Each item is
 * identified by a stable "itemKey" string, e.g. "gallery_<firestoreId>".
 *
 * Likes: one like per device, enforced client-side via localStorage.
 * The aggregate count lives in Firestore ("portfolioLikes/<itemKey>").
 *
 * Comments: anyone can post a name + short comment, stored in the
 * "portfolioComments" collection, tagged with the item's itemKey.
 */

const LIKED_PREFIX = "gtp_liked_";

// Live-subscribe to the like count for one item.
export function subscribeLikeCount(itemKey, callback) {
  return onSnapshot(doc(db, "portfolioLikes", itemKey), (snap) => {
    callback(snap.exists() ? snap.data().count || 0 : 0);
  });
}

// Has this device already liked this item?
export function hasLiked(itemKey) {
  return localStorage.getItem(LIKED_PREFIX + itemKey) === "1";
}

// Toggle like/unlike for this device. Returns the new liked state.
export async function toggleLike(itemKey) {
  const likedKey = LIKED_PREFIX + itemKey;
  const alreadyLiked = localStorage.getItem(likedKey) === "1";

  await setDoc(
    doc(db, "portfolioLikes", itemKey),
    { count: increment(alreadyLiked ? -1 : 1) },
    { merge: true }
  );

  if (alreadyLiked) {
    localStorage.removeItem(likedKey);
    return false;
  }

  localStorage.setItem(likedKey, "1");
  return true;
}

// Live-subscribe to all comments for one item (sorted client-side by
// creation time to avoid requiring a Firestore composite index).
export function subscribeComments(itemKey, callback) {
  const q = query(
    collection(db, "portfolioComments"),
    where("itemKey", "==", itemKey)
  );

  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    items.sort((a, b) => {
      const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
      const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
      return ta - tb;
    });

    callback(items);
  });
}

// Post a new comment.
export async function addComment(itemKey, name, text) {
  return addDoc(collection(db, "portfolioComments"), {
    itemKey,
    name,
    text,
    createdAt: serverTimestamp(),
  });
}

// Delete a comment (used by admin moderation).
export async function deleteComment(commentId) {
  return deleteDoc(doc(db, "portfolioComments", commentId));
}