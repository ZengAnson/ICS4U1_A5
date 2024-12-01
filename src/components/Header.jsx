import "./Header.css";
import WebFlix from "../assets/images/weblogo.png";
import Search from "../assets/images/search.png";

function Header() {
    
    return (
        <div class="header">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
            <img src={WebFlix} alt="webflix logo" width="50" id="logo" />
            <div class="header-text">
                <div class="webtitle">WEBFLIX</div>
            </div>
            <div class="header-frame">
                <input type="text" id="search-bar" height="30" placeholder="Search" />
                <button id="search-button"> 
                    <img src={Search} height="30" />
                </button>
            </div>
        </div>
    )
}

export default Header;