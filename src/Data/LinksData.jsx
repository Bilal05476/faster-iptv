import Home from "../components/Home";
import LiveChannels from "../components/LiveChannels";
import Login from "../components/Login";
import MoviesDetails from "../components/MoviesDetails";
import Movies from "../components/Movies";
import Shows from "../components/Shows";
import ShowsDetails from "../components/ShowsDetails";
import Settings from "../components/Settings";

export const Links = [
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/live-channels", element: <LiveChannels /> },
  { path: "/movies", element: <Movies /> },
  { path: "/shows", element: <Shows /> },
  { path: "/movie-details", element: <MoviesDetails /> },
  { path: "/shows-details", element: <ShowsDetails /> },
  { path: "/settings", element: <Settings /> },
];

export const AllSettings = [
  "Network",
  "Parental Control",
  "Check For Updates",
  "Application Info",
  "Clear Cache",
  "Manage Categories",
  "Choose Live Player",
  "Choose VOD Player",
  "User Account",
  "All Settings",
];
