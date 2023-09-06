import styles from "./style.module.css";

export function ButtonPrimary({ type, children, onClick, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      className={`btn btn-primary ${styles.button}`}
    >
      {children}
    </button>
  );
}
