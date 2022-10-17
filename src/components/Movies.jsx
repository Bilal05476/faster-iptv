import CardsComponent from "./CardsComponent";
import { MovieName, MovieCards } from "../Data/MoviesData";

const Movies = () => {
  return (
    <CardsComponent
      showName={MovieName}
      showCards={MovieCards}
      to="/movie-details"
    />
  );
};

export default Movies;
