import "../css/movieDetails.css";
import BackBtn from "./BackBtn";
import movies from "../assets/icons/movies.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const MoviesDetails = () => {
  const navigate = useNavigate();
  const handleWatch = () => {
    navigate("/player-screen");
  };
  return (
    <div className="movieDetail">
      <div className="movieContent">
        <h4 className="movieName">The Lost City</h4>
        <span className="movieCat">
          Series <span>|</span> Comedy <span>|</span> Adventure
        </span>
        <div className="movieRat">
          {[0, 1, 2, 3].map((item) => (
            <AiFillStar key={item} color="gold" size={20} />
          ))}
          <AiOutlineStar color="gold" size={20} /> <span>4.0</span>
        </div>
        <p className="movieDet">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          perspiciatis dicta nihil veniam? Numquam hic quod earum, iure
          laudantium cupiditate! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus perspiciatis dicta nihil veniam? Numquam
          hic quod earum, iure laudantium cupiditate!
        </p>
        <div className="movieBtn">
          <button onClick={() => handleWatch()}>
            <img src={movies} alt="play" />
            Watch Now
          </button>
          <BackBtn to="/movies" text="Back" />
        </div>
      </div>
      <div className="movieMedia">
        <img
          src="https://m.media-amazon.com/images/M/MV5BYjBiNmY3OTEtNjBmMy00NTU5LThjMjQtZjZlODBkNDM0MjU2XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg"
          alt="movie-name"
        />
      </div>
    </div>
  );
};

export default MoviesDetails;
