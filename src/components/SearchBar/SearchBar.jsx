import { Search as SearchIcon } from "react-bootstrap-icons"
import style from "./style.module.css"

export function SearchBar({ onTextChange, placeholder }) {
  return <>
    <SearchIcon size={25} className={style.icon} />
    <input
      type="text"
      className={style.input}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder={placeholder}
    />
  </>
}
