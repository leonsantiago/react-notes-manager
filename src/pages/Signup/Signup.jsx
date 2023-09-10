import { AuthAPI } from "api/auth";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary"
import { Input } from "components/Input/Input";
import { AuthLayout } from "layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { setUser } from "store/auth/auth-slice";
import style from "./style.module.css"
import { toast } from "utils/sweet-alert";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if(password === password2){
      try {
        const user = await AuthAPI.signup(email, password);
        dispatch(setUser(user));
        await toast("success", "Signup succed, you are now logged in.");
        navigate("/");
      } catch (err) {
        toast("error", "Invalid credentials")
      }
    }else{
      toast("error", "Password don't match")
    }
  };

  const form = (
    <div className={style.formContainer}>
      <h2 className={style.title}>Signup<br />
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
        <Input
          type="password"
          placeholder={"Repeat password"}
          onTextChange={setPassword2}
        />
        <ButtonPrimary
          className={style.button}
          type="submit"
        >
          Signup!
        </ButtonPrimary>
        <span>Already have an account? <Link to={"/signin"}>Signin</Link></span>
      </form>
    </div>
  );

  return <AuthLayout>{form}</AuthLayout>;
}
