import "./Login.css";
import Collage from "../assets/images/collage.jpeg";
import { useNavigate } from "react-router";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    function Log() {
        if (pass === "iloveyou"){
            return;
        } else {
            alert("Password Incorrect");
        }
    }
    
    return (
        <div className="hero">
            <img src={Collage} alt="collage" id="hero-image"></img>
            <div className="shadow"></div>
            <div className="hero-frame">
                <div className="login-box">
                    <div className="account-title">Log In</div>
                    <label className="account-text">Email</label>
                    <input className="account-input" type="text" value={email} onChange={(event) => {setEmail(event.target.value)}}></input>
                    <label className="account-text">Password</label>
                    <input className="account-input" type="text" value={pass} onChange={(event) => {setPass(event.target.value)}}></input>
                    <label>Don't have an account? </label>
                    <label className="account-no" onClick={() => navigate("/register")}>Click here</label>
                    <button className="account-button" onClick={() => Log()}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Login;