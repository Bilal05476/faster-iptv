import { NavLink } from "react-router-dom";
import "../css/cardComponent.css";

const CardsComponent = ({ showName, showCards }) => {
  const handleCategory = (item) => {
    alert(`Hello ${item}`);
  };
  return (
    <div className="cardsComponent">
      <div className="itemSearch">
        <input type="text" placeholder="Search" />
        {showName.map((item) => (
          <h5
            onClick={() => handleCategory(item)}
            className="showName"
            key={item}
          >
            {item}
          </h5>
        ))}
      </div>
      <div className="showCards">
        {showCards.map((item) => (
          <NavLink className="showCardLink" key={item.sName} to="/">
            <img className="showCardImage" src={item.image} alt={item.sName} />
          </NavLink>
        ))}
        <NavLink className="backBtn" to="/home">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default CardsComponent;
