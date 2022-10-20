import "../css/playerScreen.css";
import BackBtn from "./BackBtn";
import exm from "../assets/exm.mp4";
const PlayerScreen = () => {
  return (
    <div className="playerScreen">
      <BackBtn text={"Back"} margin={"1rem"} to="/home" />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "3rem",
        }}
      >
        <video
          src={exm}
          controls
          style={{ height: "80%", width: "80%" }}
        ></video>
      </div>
    </div>
  );
};

export default PlayerScreen;
