import "../css/home.css";
import logo from "../assets/logo/logowithoutname.png";
import logotext from "../assets/logo/logotext.png";
import tv from "../assets/icons/tv.png";
import movies from "../assets/icons/movies.png";
import shows from "../assets/icons/shows.png";
import youtube from "../assets/icons/youtube.png";
import settings from "../assets/icons/settings.png";
import speedtext from "../assets/icons/speedtest.png";
import weather from "../assets/icons/weather.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-logos">
          <img className="home-logo-1" src={logo} alt="faster-iptv-logo" />
          <img className="home-logo" src={logotext} alt="faster-iptv-logo" />
        </div>
        <div className="weather-city">
          <img className="weather-logo" src={weather} alt="faster-iptv-logo" />
          <p>
            Abu Dhabi
            <br />
            <span>31 &#8451;</span>
          </p>
        </div>
      </div>
      <div className="home-center">
        <HomePlayBox
          to="/live-channels"
          icon={tv}
          text="Live Tv"
          alt="tv"
          bgColor="lightblue"
        />
        <HomePlayBox
          to="/movies"
          icon={movies}
          text="Movies"
          alt="movies"
          bgColor="pink"
        />
        <HomePlayBox
          to="/shows"
          icon={shows}
          text="Shows"
          alt="shows"
          bgColor="yellow"
        />
      </div>
      <div className="home-bottom">
        <div className="home-redirect-icons">
          <HomeRed
            anchor={true}
            img={youtube}
            href="https://youtube.com"
            text="Youtube"
            right={true}
          />
          <HomeRed link={true} img={settings} to="/" text="Settings" />
        </div>
        <div className="speed-text">
          <HomeRed anchor={true} img={speedtext} href="#" text="Speed test" />
        </div>
      </div>
    </div>
  );
};

export default Home;

const HomePlayBox = ({ to, icon, text, alt, bgColor }) => {
  return (
    <NavLink
      to={to}
      style={{
        backgroundColor: bgColor,
        textDecoration: "none",
        color: "#000",
      }}
      className="play-choice-box"
    >
      <img src={icon} alt={alt} />
      <p>{text}</p>
    </NavLink>
  );
};

const HomeRed = ({ right, img, link, to, anchor, href, text }) => {
  return (
    <div className={`home-red ${right ? "right" : ""}`}>
      {link && (
        <NavLink className="home-link" to={to}>
          <img src={img} alt="settings" />
          <span>{text}</span>
        </NavLink>
      )}
      {anchor && (
        <a className="home-link" href={href} target="blank">
          <img src={img} alt="youtube" />
          <span>{text}</span>
        </a>
      )}
    </div>
  );
};
