import style from "./style.module.css"

export function Input({ type = "text", onTextChange, placeholder }) {
  return (
    <input
      type={type}
      className={style.input}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}
