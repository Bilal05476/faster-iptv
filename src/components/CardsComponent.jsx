import { NavLink } from "react-router-dom";
import "../css/cardComponent.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import BackBtn from "./BackBtn";
import { AiOutlineMenu } from "react-icons/ai";

const CardsComponent = ({ showName, showCards, to }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCard, setFilteredCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = () => {
    console.log(`Hello ${searchInput}`);
  };

  const handleCategory = (startCat) => {
    let frt = showCards.filter((item) => item.category.includes(startCat));
    setFilteredCards(frt);
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
        <AiOutlineMenu
          className="collapse-list"
          style={{
            position: "absolute",
            top: 21,
            right: 15,
            cursor: "pointer",
          }}
          size={28}
          color="#fff"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="collapse">
            <div
              className="cardNames collapsed"
              style={{ height: isOpen ? "auto" : "10px" }}
            >
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
          </div>
        )}
        <div className="cardNames">
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
      </div>
      <div className="showCards">
        {filteredCard.length > 0 && (
          <>
            {filteredCard.map((item) => (
              <NavLink className="showCardLink" key={item.sName} to={to}>
                <img
                  className="showCardImage"
                  src={item.image}
                  alt={item.sName}
                />
              </NavLink>
            ))}
          </>
        )}
        {filteredCard.length === 0 && (
          <>
            {showCards.map((item) => (
              <NavLink className="showCardLink" key={item.sName} to={to}>
                <img
                  className="showCardImage"
                  src={item.image}
                  alt={item.sName}
                />
              </NavLink>
            ))}
          </>
        )}
      </div>
      <BackBtn to="/home" text="Back" margin={"35rem 0rem"} />
    </div>
  );
};

export default CardsComponent;
