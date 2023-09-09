import { NoteAPI } from "api/note-api";
import { Header } from "Header/Header";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";
import styles from "./style.module.css"

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.workspace}>
        <Outlet />
      </div>
    </div>
  );
}

export const ProtectedApp = withAuthRequired(App);
