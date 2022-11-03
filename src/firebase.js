import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxRhDwljxxOGV-NUeiv_104v_sxIQ6MGE",
  authDomain: "chatapp1-1fed1.firebaseapp.com",
  projectId: "chatapp1-1fed1",
  storageBucket: "chatapp1-1fed1.appspot.com",
  messagingSenderId: "753622676375",
  appId: "1:753622676375:web:868cc9b40c4b42216e0ad2",
  measurementId: "G-7D3K71GGH8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);