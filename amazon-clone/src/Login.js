import React, { useState} from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './Firebase';


function Login() {
   const history = useHistory();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


    const login = (event) => {
        event.preventDefault();
        // This will stop the refresh
        // Do the login logic

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in, redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.message));

    };

    const register = (event) => {
        event.preventDefault();
        // this will stops the refresh
        // Do the register logic

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // created a user and logged in, redirect to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaEk7Wsuqr6d7aN55nypPvlxNrBws50zKkg&usqp=CAU" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <button onClick={login} type="submit" className="sign-in">Sign In</button>
                </form>

                <p>Welcome to amazon the biggest E commerce platform in the world. We will happy to assist you regarding any issue during signup or create an account.</p>

                <button onClick={register} className="register">Create your Amazon account</button>

            </div>
        </div>
    )
}

export default Login;
