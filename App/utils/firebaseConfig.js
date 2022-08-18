// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig_0 = {
  apiKey: "AIzaSyBmv3icaDQ9xIVHZYFIpuAVY4l8q2J9vYk",
  authDomain: "squareco-9a19a.firebaseapp.com",
  projectId: "squareco-9a19a",
  storageBucket: "squareco-9a19a.appspot.com",
  messagingSenderId: "501899774472",
  appId: "1:501899774472:web:b86a17681d475e7fdddfbd",
};
const firebaseConfig = {
  apiKey: "AIzaSyD0pFdrmB93AeIi3W6nC_13NhabjCZKz3E",
  authDomain: "ghoul-1679b.firebaseapp.com",
  projectId: "ghoul-1679b",
  storageBucket: "ghoul-1679b.appspot.com",
  messagingSenderId: "846069621473",
  appId: "1:846069621473:web:25430d2a4a4bf314570da0"
};

export default firebaseConfig;

import { initializeApp } from "firebase/app";
let Firebase;

if (!Firebase?.apps?.length) {
  Firebase = initializeApp(firebaseConfig);
}
export { Firebase };
