import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LiveChannels from "./components/LiveChannels";

function App() {
  const Links = [
    { path: "/", element: <Login /> },
    { path: "/home", element: <Home /> },
    { path: "/live-channels", element: <LiveChannels /> },
  ];
  return (
    <div className="App">
      <Routes>
        {Links.map((item, ind) => (
          <Route exact path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
