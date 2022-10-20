import "../css/playerScreen.css";
import BackBtn from "./BackBtn";

import { useState } from "react";
const PlayerScreen = () => {
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/0BIaDVnYp2A"
  );
  return (
    <div className="playerScreen">
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "0rem",
        }}
      > */}
      <iframe
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
      {/* </div> */}
      <BackBtn text={"Back"} margin={"2rem"} to="/home" />
    </div>
  );
};

export default PlayerScreen;
