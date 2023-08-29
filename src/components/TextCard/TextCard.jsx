import styles from "./style.module.css";
import { useState } from "react";
import { Trash } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClick, onClickTrash }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }

  return (
    <>
      <div
        className={`card ${styles.container}`} style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
        onClick={onClick}
      >
        <div className="card-body">
          <div className={styles.title_row}>
            <h5 className="card-title">{title}</h5>
            <Trash
              size={20}
              onMouseEnter={() => setIsTrashHovered(true)}
              onMouseLeave={() => setIsTrashHovered(false)}
              style={{ color: isTrashHovered ? "#FF7373" : "b8b8b8" }}
              onClick={onClickTrash_}
            />
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className={`card-text ${styles.text_content}`}>
            {content}
          </p>
        </div>
      </div>
    </>
  );
}
