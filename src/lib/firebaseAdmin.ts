// lib/firebaseAdmin.ts
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  console.log("Initializing Firebase Admin SDK..."); // Log before init check
  const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountString) {
      console.error("FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set!");
      // You might even throw an error here to fail fast if the key is missing
      // throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not set.");
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountString || "{}"); // Parse the string

    // Optional: Log parts of the service account to confirm it looks right (be cautious with keys!)
    // console.log("Parsed service account JSON:", {
    //     projectId: serviceAccount.project_id,
    //     clientEmail: serviceAccount.client_email
    // });


    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
     console.log("Firebase Admin SDK initialized successfully."); // Log on success

  } catch (error) {
    console.error("Failed to parse service account JSON or initialize Admin SDK:", error);
    // Log the exact error if parsing or init fails
  }

} else {
    console.log("Firebase Admin SDK already initialized."); // Log if already initialized
}


const db = admin.firestore();
// Optional: Log after getting db instance
// console.log("Firestore instance obtained.");

export { db, admin };
export default admin;
