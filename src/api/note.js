import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { FirebaseApp } from "utils/firebase";


export class NoteAPI {
  static async create(formValues) {
    const response = await addDoc(
      collection(FirebaseApp.db, "notes"), formValues)
    return {
      id: response.id,
      ...formValues,
    };
  }

  static async fetchAll() {
    const q = query(
      collection(FirebaseApp.db, "notes"),
      orderBy("created_at", "asc")
    );

    const response = await getDocs(q);
    return response.docs.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });
  }

  static async deleteById(noteId) {
    deleteDoc(FirebaseApp.db, "notes", noteId);
  }

  static async updateById(id, values) {
    const q = doc(FirebaseApp.db, "notes", id);
    const response = await updateDoc(q, values);
    return {
      id,
      ...values,
    }
  }
}
