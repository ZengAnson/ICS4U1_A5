import "./Genre.css";
import { useNavigate } from "react-router";

function Genres(prop) {
    const navigate = useNavigate();
    
    function genreChosen() {
        navigate (`genre/${prop.id}`)
    }

    return (
        <div className="genre-container">
            <label className="genre-title">Genres</label>
            {prop.genreList.map((category) => (
                <button key={category.id} className="genre-list" onClick={() => genreChosen(category.id)}>{category.genre}</button>
            ))}
        </div>
    )
}

export default Genres;