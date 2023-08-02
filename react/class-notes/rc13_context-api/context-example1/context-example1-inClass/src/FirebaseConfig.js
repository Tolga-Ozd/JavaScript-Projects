import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: AIzaSyArEcB44T9duUMRePsVbFOW0RsRVubP_Cs
  authDomain:teamproject-d5799.firebaseapp.com
  projectId:teamproject-d5799
  storageBucket:teamproject-d5799.appspot.com
  messagingSenderId: 452044912623
  appId: 1:452044912623:web:46ce2809819f14fb21681a
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);





//  REACT_APP_TMDB_KEY=62d3c846cfd19a1522b1be037d17c73f