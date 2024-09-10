import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwTbTG_auMrWy_e4aVUFMHs3794zZ4AXE",
  authDomain: "hgregusersdb.firebaseapp.com",
  projectId: "hgregusersdb",
  storageBucket: "hgregusersdb.appspot.com",
  messagingSenderId: "996459139126",
  appId: "1:996459139126:web:ca1d5184f0f5db61618897",
  measurementId: "G-LMF2MVSGER",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function addForm(formData, service) {
  formData = Object.assign({}, formData, { service: service });
  const url = "https://hg-registration-bot-cd9ed03a6bc5.herokuapp.com/submit";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (response.ok) {
    console.log("Data saved successfully:", data);
  } else {
    console.error("Failed to save data:", data);
  }
}
