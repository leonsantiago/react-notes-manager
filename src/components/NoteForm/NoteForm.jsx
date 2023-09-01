import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { ValidatorService } from "services/validator";
import styles from "./style.module.css";

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20)
  },
  content: (value) => {
    return ValidatorService.min(value, 3)
  }
}

export function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
  const [formErrors, setFormErrors] = useState({ title: undefined, content: undefined });
  const [formValues, setFormValues] = useState({ title: "", content: "" })

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value })
    validate(name, value);
  }
  const validate = (fieldName, fieldValue) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATOR[fieldName](fieldValue)
    })
  }
  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill className={styles.icon} />}
      </div>
      <div className="col-1">
        {onClickDelete && <TrashFill />}
      </div>
    </>
  );
  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input onChange={updateFormValues} className="form-control" type="text" name="title" />
    </>
  );
  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <textarea onChange={updateFormValues} className="form-control" type="text" name="content" row="5" />
    </>
  );
  const submitBtn = (
    <div className={styles.submit_btn}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>
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
      {onSubmit && submitBtn}
    </div>
  );
}
