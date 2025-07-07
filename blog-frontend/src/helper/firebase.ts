import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getEnv } from "@/helper/grtEnv";


const firebaseConfig = {
  apiKey: getEnv('VITE_API_FIREBASE_API_KEY'),
  authDomain: "mern-blog-platform.firebaseapp.com",
  projectId: "mern-blog-platform",
  storageBucket: "mern-blog-platform.firebasestorage.app",
  messagingSenderId: "567803910860",
  appId: "1:567803910860:web:20e70ee607ffaba0314069",
  measurementId: "G-ZY112P6MLG"
};

const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | null = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Set up Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };