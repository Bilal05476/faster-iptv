import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LiveChannels from "./components/LiveChannels";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/live-channels" element={<LiveChannels />} />
      </Routes>
    </div>
  );
}

export default App;
