import Home from "../components/Home";
import LiveChannels from "../components/LiveChannels";
import Login from "../components/Login";
import Movies from "../components/Movies";
import Shows from "../components/Shows";
export const Links = [
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/live-channels", element: <LiveChannels /> },
  { path: "/movies", element: <Movies /> },
  { path: "/shows", element: <Shows /> },
];
