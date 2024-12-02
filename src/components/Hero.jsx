import "./Hero.css";
import Collage from "../assets/images/collage.jpeg";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    function register() {
        return navigate ("/register");
    }
    function login(){
        return navigate("login");
    }

    return (
        <div class="hero">
            <img src={Collage} alt="collage" id="hero-image"></img>
            <div class="shadow"></div>
            <div class="hero-frame">
                <div class="title-box">
                    <div class="title-text">
                        <h4>For a Late Friday Night</h4>
                        <h1>Any Show. Every Show.</h1>
                        <h2>Stream Now</h2>
                        <h4>Start Your 1 Month Free Trial Today</h4>
                    </div>
                    <button class="buttons account" onClick={(event) => navigate ("/register")}>Create Account</button>
                    <button class="buttons signup" onClick={(event) => navigate("login")}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;