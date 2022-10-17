import "../css/liveChannels.css";
import { useState } from "react";
import tv from "../assets/icons/tv.png";
import star from "../assets/icons/star.png";
import channelIcon from "../assets/icons/channel.png";
import channelImage from "../assets/images/channelimage.png";
import play from "../assets/images/playerscreen.png";
import BackBtn from "./BackBtn";

const LiveChannels = () => {
  const [view, setView] = useState(1);
  const [channel, setChannel] = useState({
    img: channelImage,
    cName: "MBC Channel",
    quality: "1 MBC > FHD",
    duration: "2:33 pm",
  });

  return (
    <div>
      {view === 1 && (
        <div className="liveChannels">
          <div className="header">
            <img src={tv} alt="tv-channels" />
            <h4>Live Channels</h4>
          </div>
          <div className="content">
            <div className="channel-list">
              <Channel
                channelName={"MBC Channel"}
                channelQuality={`1 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"ABC"}
                channelQuality={`2 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"BBC"}
                channelQuality={`3 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"CNN"}
                channelQuality={`4 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"News A"}
                channelQuality={`5 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"News B"}
                channelQuality={`6 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"News B"}
                channelQuality={`7 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"News C"}
                channelQuality={`8 MBC > FHD`}
                setChannel={setChannel}
              />
              <Channel
                channelName={"News D"}
                channelQuality={`9 MBC > FHD`}
                setChannel={setChannel}
              />
            </div>
            <div className="channel-details">
              <img
                className="channel-img"
                src={channel.img}
                alt="channel"
                onClick={() => setView(2)}
              />
              <ChannelDetails
                channelName={channel.cName}
                channelQuality={channel.quality}
                channelDuration={channel.duration}
              />
            </div>
          </div>
          <BackBtn to="/home" text="Back" margin={"2rem"} />
        </div>
      )}
      {view === 2 && (
        <div className="playChannels">
          <span className="play-back" onClick={() => setView(1)}>
            Back
          </span>
          <img src={play} alt="play screen" />
        </div>
      )}
    </div>
  );
};

export default LiveChannels;

const Channel = ({ channelName, channelQuality, setChannel }) => {
  const changeChannel = () => {
    setChannel({
      img: channelImage,
      duration: "2:33 pm",
      cName: channelName,
      quality: channelQuality,
    });
  };
  return (
    <div className="channel" onClick={changeChannel}>
      <h4 className="channel-name">{channelName}</h4>
      <img className="channel-star" src={star} alt="star" />
      <img src={channelIcon} alt="channel" />
      <h4 className="channel-quality">{channelQuality}</h4>
    </div>
  );
};

const ChannelDetails = ({ channelName, channelQuality, channelDuration }) => {
  return (
    <div className="channel-detail">
      <div className="child">
        <h4 className="channel-name">{channelName}</h4>
        <img className="channel-star" src={star} alt="star" />
      </div>
      <div className="child">
        <img src={channelIcon} alt="channel" />
        <h4 className="channel-quality">{channelQuality}</h4>
      </div>
      <div className="child">
        <img src={channelIcon} alt="channel" />
        <h4 className="channel-quality">{channelDuration}</h4>
      </div>
    </div>
  );
};
