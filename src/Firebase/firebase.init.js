import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initFirebaseConfig = () =>{
    return initializeApp(firebaseConfig);
}
export default initFirebaseConfig;