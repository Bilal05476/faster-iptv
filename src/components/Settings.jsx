import "../css/settings.css";
import SettingsImg from "../assets/icons/settings.png";
import BackBtn from "./BackBtn";
import { AllSettings } from "../Data/LinksData";
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
const Settings = () => {
  const [settingName, setSettingName] = useState("Parental Control");
  return (
    <div className="settings">
      <div className="settingsItems">
        <div className="settingsNames">
          <div className="heading">
            <img className="headingImg" src={SettingsImg} alt="setings" />
            <h4>Settings</h4>
          </div>
          {AllSettings.map((item) => (
            <div
              onClick={() => setSettingName(item)}
              className={`settingName ${settingName === item ? "active" : ""}`}
            >
              <span>
                <AiFillCaretRight color="var(--themeBlue--)" size={13} />
              </span>
              <h5 key={item}>{item}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="showSetting">
        {/* {settingName === "Network" && <NetworkSetting />} */}
        {settingName === "Parental Control" && (
          <InputControl
            data={[
              { placeholder: "Enter current parental password" },
              { placeholder: "Enter new parental password" },
            ]}
            btnTxt="Update Password"
            heading={"Manage your parnetal control password"}
          />
        )}
        {settingName === "Manage Categories" && (
          <InputControl
            data={[{ placeholder: "Enter your password" }]}
            heading={"Manage your portal package categories"}
            btnTxt="Check Password"
          />
        )}
        {settingName === "User Account" && (
          <AccountSetting
            data={[
              { nName: "Registration Code", date: "10/10/2022 Monday" },
              { nName: "Expiry Date", date: "12/10/2022 Monday" },
            ]}
            btnTxt="Logout"
            heading={"Manage user accounts"}
          />
        )}
      </div>
      <BackBtn to="/home" text="Back" margin={"35rem 0rem"} />
    </div>
  );
};

export default Settings;

const InputControl = ({ heading, data, btnTxt }) => {
  return (
    <div className="parentalSettings">
      <h4>{heading}</h4>
      {data.map((item) => (
        <div key={item.placeholder} className="passInputs">
          <input type="password" placeholder={item.placeholder} />
        </div>
      ))}
      <button className="btn">{btnTxt}</button>
    </div>
  );
};

const AccountSetting = ({ data, heading, btnTxt }) => {
  return (
    <div className="networkSettings">
      <h4>{heading}</h4>
      {data.map((item) => (
        <div key={item.nName} className="status">
          <h5>{item.nName}</h5>
          <span>{item.date}</span>
        </div>
      ))}
      <button className="btn">{btnTxt}</button>
    </div>
  );
};
