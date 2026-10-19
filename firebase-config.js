// Firebase settings for the interclub site (project: ATP Vs Dural).
// These values are not secret: the Firestore rules decide who can change scores.
 
export const firebaseConfig = {
  apiKey: "AIzaSyAVw5VLCLa3PYcJcFYn_P5jDa2R1-89Wn8",
  authDomain: "atp-vs-dural.firebaseapp.com",
  projectId: "atp-vs-dural",
  storageBucket: "atp-vs-dural.firebasestorage.app",
  messagingSenderId: "581024981289",
  appId: "1:581024981289:web:d112350459ef8f4c451738"
};
 
// Name of this event in the database. For a future interclub, change this
// (e.g. "interclub-2027") and press "Create the event" to start fresh.
export const EVENT_ID = "interclub-2026";