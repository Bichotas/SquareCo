import { Firebase } from "./firebaseConfig";
import { getStorage } from "firebase/storage";

const storage = getStorage(Firebase, "ghoul-1679b.appspot.com");

// Funciones para el strorage

export { storage };
