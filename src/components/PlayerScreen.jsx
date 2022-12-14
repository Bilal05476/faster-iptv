import "../css/playerScreen.css";
import BackBtn from "./BackBtn";
import sampleVideo from "../assets/hero-jackets-closeup.mp4";
import { useState } from "react";
const PlayerScreen = () => {
  const [videoSrc, setVideoSrc] = useState(
    // "https://www.youtube.com/embed/0BIaDVnYp2A"
    sampleVideo
  );
  return (
    <div className="playerScreen">
      <iframe
        controls
        max-width="1200px"
        height="1000px"
        style={{
          border: "0px solid var(--themeBlue--)",
          borderRadius: "5px",
        }}
        src={videoSrc}
        allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen={true}
      ></iframe>

      <BackBtn text={"Back"} margin={"2rem"} to="/home" />
    </div>
  );
};

export default PlayerScreen;
