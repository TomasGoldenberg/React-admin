import React,{useState} from "react";
import { useHistory} from "react-router-dom";
import "../Assets/styles/containers/Login.css";
import {auth} from "../firebase.js"



const Login = ()=>{
    const history = useHistory()

    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")


    const login = event => {
        event.preventDefault(); //stop refresh

        auth.signInWithEmailAndPassword(email,password)
            .then( (auth) => {
                

                history.push("/")
            })
            .catch( (err) => alert(err.message) )
    }

    const register = event => {
        event.preventDefault(); //stop refresh

        auth.createUserWithEmailAndPassword(email,password)
            .then( auth=>  {

                history.push("/")
            })
            .catch((err)=> alert(err.message) )
        
    }


    return(
        <div className="login">
                <div className="login__form--container">
                    <h2>Sign in</h2>
                    <form className="login__form">
                        <h5>Email </h5>
                        <input type="email" value={email} onChange={event => setEmail(event.target.value)} className="login__email"/>

                        <h5>Password</h5>
                        <input type="password" value={password} onChange={event => setPassword(event.target.value)} className="login__password"/>
                    
                        <input type="submit" value="Sign In" onClick={login}/>
                    </form>

                    <button onClick={register}>Create Account & log in</button>
                </div>
        </div>
    )
}

export default Login;
