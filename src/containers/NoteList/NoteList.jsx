import { TextCard } from "components/TextCard/TextCard";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css"

export function NoteList(props) {
  const noteList = useSelector(store => store.notesSlice.noteList);
  const navigate = useNavigate();

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div className={styles.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => alert("onClickTrash")}
            />
          </div>
        )
      })}
    </div>
  )
}
