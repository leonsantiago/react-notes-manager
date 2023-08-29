import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import styles from "./style.module.css";

export function NoteForm({ title }) {
  const actionIcons = (
    <>
      <div className="col-1">
        <PencilFill className={styles.icon} />
      </div>
      <div className="col-1">
        <TrashFill />
      </div>
    </>
  );
  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input className="form-control" type="text" name="title" />
    </>
  );
  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <textarea className="form-control" type="text" name="content" row="5" />
    </>
  );
  const submitBtn = (
    <div className={styles.submit_btn}>
      <ButtonPrimary>Submit</ButtonPrimary>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${styles.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {submitBtn}
    </div>
  );
}
