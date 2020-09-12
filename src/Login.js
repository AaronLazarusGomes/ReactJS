import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import img from "./b.png";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    //preventing regresh
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    //preventing regresh
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={img} alt="logo name" className="login__logo img-fluid"></img>
      </Link>

      <div className="login__container">
        <h1 className="text-color">Sign in</h1>
        <form>
          <h5 className="text-color">Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></input>
          <h5 className="text-color">Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          ></input>
          <button
            onClick={login}
            type="submit"
            className="login__signInButton btn btn-success"
          >
            Sign in
          </button>
        </form>
        <button
          onClick={register}
          className="login__signInButton btn btn-primary"
        >
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Login;
