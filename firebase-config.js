// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzCA_Jz2n9j1vkXGumnOyvMhcHST5riDM",
  authDomain: "simrideinfo.firebaseapp.com",
  projectId: "simrideinfo",
  storageBucket: "simrideinfo.appspot.com",
  messagingSenderId: "741906633091",
  appId: "1:741906633091:web:8ee0ca52c878a10b95e6b6",
  measurementId: "G-8W3DQ4QXJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
