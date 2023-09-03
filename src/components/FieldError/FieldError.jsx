import styles from "./style.module.css"

export function FieldError({ msg }) {
  return (
    <span className={styles.container}>{msg}</span>
  )
}
