import "../css/showsDetails.css";
import { ShowsSeason, EpisodeDetails } from "../Data/ShowsSeason";
import BackBtn from "./BackBtn";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const ShowsDetails = () => {
  return (
    <div className="showsDetail">
      <div className="seasonsSection">
        <h4 className="showsTitle">Stanger Things</h4>
        {ShowsSeason.map((item) => (
          <div className="seasonLink">
            <h4>{item.season}</h4>
            <p>{item.episode}</p>
          </div>
        ))}
      </div>
      <div className="episodeSection">
        {EpisodeDetails.map((item) => (
          <NavLink
            to="/player-screen"
            key={item.episodeName}
            className="episodeDetails"
          >
            <div className="episodeMedia">
              <img src={item.episodeImage} alt={item.episodeName} />
              <div className="episodeText">
                <span>{item.episodeTag}</span>
                <h4 className="episodeName">{item.episodeName}</h4>
                <div className="episodeRatings">
                  {[0, 1, 2, 3].map((item) => (
                    <AiFillStar key={item} color="gold" size={20} />
                  ))}
                  <AiOutlineStar color="gold" size={20} />
                </div>
              </div>
            </div>
            <div className="episodeDurations">
              <span className="date">{item.episodeDate}</span>
              <span className="duration">
                <BiTimeFive color="#fff" size={13} />
                <span>{item.episodeDuration}</span>
              </span>
            </div>
          </NavLink>
        ))}
      </div>
      <BackBtn text="Back" to="/shows" margin={"38rem 2rem"} />
    </div>
  );
};

export default ShowsDetails;
