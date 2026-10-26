// Firebase settings for the ATP v Dural interclub site (project: ATP Events).
// These values are not secret: the Firestore rules decide who can change scores.

export const firebaseConfig = {
  apiKey: "AIzaSyAykyvBpr-3H4_gCm--8tDN2IhV-2EFfj0",
  authDomain: "atp-events.firebaseapp.com",
  projectId: "atp-events",
  storageBucket: "atp-events.firebasestorage.app",
  messagingSenderId: "273200954086",
  appId: "1:273200954086:web:5e60331be74192b6741927"
};

// This event's own record in the database. Each site uses a different name.
export const EVENT_ID = "interclub-2026";
