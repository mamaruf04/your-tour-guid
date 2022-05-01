import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPTv3yp14rlq4spoznpwzkWTgkCt52X2Y",
  authDomain: "independent-service-b49b4.firebaseapp.com",
  projectId: "independent-service-b49b4",
  storageBucket: "independent-service-b49b4.appspot.com",
  messagingSenderId: "242456671256",
  appId: "1:242456671256:web:8e91af76c6bcf5746d7f6d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;