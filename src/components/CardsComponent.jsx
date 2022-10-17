import { NavLink } from "react-router-dom";
import "../css/cardComponent.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const CardsComponent = ({ showName, showCards, to }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleCategory = (item) => {
    alert(`Hello ${item}`);
  };
  const handleSearch = () => {
    alert(`Hello ${searchInput}`);
  };
  return (
    <div className="cardsComponent">
      <div className="itemSearch">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <BsSearch
          onClick={handleSearch}
          style={{
            marginLeft: "-2rem",
            marginBottom: "-0.25rem",
            cursor: "pointer",
          }}
          color="#ccc"
          size={20}
        />
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
          <NavLink className="showCardLink" key={item.sName} to={to}>
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