import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary"
import { Input } from "components/Input/Input";
import { AuthLayout } from "layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { Link } from "react-router-dom"
import style from "./style.module.css"

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = ((e) => {
    e.preventDefault();
    console.log(email, password)
  });

  const form = (
    <div className={style.formContainer}>
      <h2 className={style.title}>Signin <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={style.formGroup}>
        <Input
          placeholder={"Email"}
          onTextChange={setEmail}
        />
        <Input
          type="password"
          placeholder={"Password"}
          onTextChange={setPassword}
        />
        <ButtonPrimary
          className={style.button}
          type="submit"
        >
          Sign in!
        </ButtonPrimary>
        <span>Don't have an account yet? <Link to={"/signup"}>Signup</Link></span>
      </form>
    </div>
  );

  return <AuthLayout>{form}</AuthLayout>;
}
