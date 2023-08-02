import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
     apiKey: "AIzaSyArEcB44T9duUMRePsVbFOW0RsRVubP_Cs",
  authDomain: "teamproject-d5799.firebaseapp.com",
  projectId: "teamproject-d5799",
  storageBucket: "teamproject-d5799.appspot.com",
  messagingSenderId: "452044912623",
  appId: "1:452044912623:web:46ce2809819f14fb21681a"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);