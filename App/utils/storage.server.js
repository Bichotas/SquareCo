import { Firebase } from "./firebaseConfig";
import { getStorage } from "firebase/storage";

const storage = getStorage(Firebase);

// Funciones para el strorage

export { storage };
