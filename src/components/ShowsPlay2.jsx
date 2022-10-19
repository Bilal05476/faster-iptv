import "../css/showsPlay.css";
import BackBtn from "./BackBtn";
const ShowsPlay2 = () => {
  return (
    <div className="showsPlay two">
      <div className="showPlayContent">
        <div>
          <h4 className="playerHeading">Player Menu</h4>
          <div className="playMenuBtn">
            <button className="btn3">Choose Audio Track</button>
            <button className="btn4">Choose Subtitles</button>
            <BackBtn text={"Back"} to="/shows-details" margin={"11rem 0rem"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowsPlay2;
