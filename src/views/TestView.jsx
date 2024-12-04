import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import "./test.css";

function Test() {
    return (
        <div>
            <Header />
            <div className="hi">
                <Hero />
                <Footer />
            </div>
        </div>
    )
}

export default Test;