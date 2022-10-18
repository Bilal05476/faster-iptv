import { useState } from "react";
import "../css/showsPlay.css";
import BackBtn from "./BackBtn";
const ShowsPlay = () => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="showsPlay">
      <BackBtn text={"Back"} to="/shows-details" />
      <div className={`showPlayContent ${isPlay ? "play" : ""}`}>
        {!isPlay && (
          <div>
            <h4>Do you wish to resume from where you stopped?</h4>
            <div className="showsPlayBtn">
              <button className="btn1" onClick={() => setIsPlay(!isPlay)}>
                Resume
              </button>
              <button className="btn2" onClick={() => setIsPlay(!isPlay)}>
                Start
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowsPlay;
