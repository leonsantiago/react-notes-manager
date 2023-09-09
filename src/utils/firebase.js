import { firebaseConfig } from "../config"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export class FirebaseApp {
  static firebaseApp = undefined
  static auth = undefined

  static init(){
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth();
    signInWithEmailAndPassword(this.auth, "santiago@santiago.com", "Revival123");
  }
}
