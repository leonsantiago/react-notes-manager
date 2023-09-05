import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary"
import { Input } from "components/Input/Input";
import { Link } from "react-router-dom"
import style from "./style.module.css"

export function Signin() {
  const form = (
    <div className={style.formContainer}>
      <h2 className={style.title}>Signin <br />
        to access your team notes
      </h2>
      <form className={style.formGroup}>
        <Input placeholder={"Email"} />
        <Input type="password" placeholder={"Password"} />
        <ButtonPrimary className={style.button}>Sign in!</ButtonPrimary>
        <span>Don't have an account yet? <Link to={"/signup"}>Signup</Link></span>
      </form>
    </div>
  );

  return <>{form}</>;
}
