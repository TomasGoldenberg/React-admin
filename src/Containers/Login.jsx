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
                
                <img className="form--img" src="https://fotos.subefotos.com/2da379363e2b0da7723c61bb54b4b121o.png?fbclid=IwAR1gjbLHOuIz-93l-Q0CeEwVrEcHS4-u6kjKBPx7XJSdtwaR7HFb2xqLuk8"/>
            
                <form className="login__form">
                        <h3>Sign In</h3>
                    <input  required placeholder=" &#9993;   Email..." type="email" value={email} onChange={event => setEmail(event.target.value)} className="login__text"/>

                    
                    <input required placeholder="  &#10055;  Password..." type="password" value={password} onChange={event => setPassword(event.target.value)} className="login__text"/>
                    
                    <input className="login__form--button" type="submit" value="Sign In" onClick={login}/>
                </form>

            
                <button className="register__form--button" onClick={register}>Fill the form to Create Account & log in</button>
            </div>
        </div>
    )
}

export default Login;
