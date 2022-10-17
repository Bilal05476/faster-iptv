import "../css/settings.css";
// import { useState } from "react";
import SettingsImg from "../assets/icons/settings.png";
import BackBtn from "./BackBtn";
import { AllSettings } from "../Data/LinksData";
import { AiFillCaretRight } from "react-icons/ai";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsItems">
        <div className="settingsNames">
          <div className="heading">
            <img className="headingImg" src={SettingsImg} alt="setings" />
            <h4>Settings</h4>
          </div>
          {AllSettings.map((item) => (
            <div className="settingName">
              <span>
                <AiFillCaretRight color="var(--themeBlue--)" size={13} />
              </span>
              <h5
                key={item}
                // onClick={() => handleCategory(item)}
              >
                {item}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="showSetting"></div>
      <BackBtn to="/home" text="Back" margin={"35rem 0rem"} />
    </div>
  );
};

export default Settings;
