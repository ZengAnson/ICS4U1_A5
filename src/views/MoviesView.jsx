import Header from "../components/Header.jsx";
import Genre from "../components/Genre.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";


function Movies() {
    const gen = [
        {genre: "Action", id: 28},
        {genre: "Adventure", id: 12},
        {genre: "Animation", id: 16},
        {genre: "Comedy", id: 35},
        {genre: "Fantasy", id: 14},
        {genre: "Horror", id: 27},
        {genre: "Music", id: 10402},
        {genre: "Mystery", id: 9648},
        {genre: "Sci-Fi", id: 878},
        {genre: "TV", id: 10770},
    ]

    return (
        <div>
            <Header />
            <div>
                <Genre genreList={gen} />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Movies;