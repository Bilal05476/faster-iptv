import CardsComponent from "./CardsComponent";
import { ShowName, ShowCards } from "../Data/ShowsData";
const Shows = () => {
  return (
    <CardsComponent
      showName={ShowName}
      showCards={ShowCards}
      to="/shows-details"
    />
  );
};

export default Shows;
