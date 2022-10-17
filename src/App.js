import { Routes, Route } from "react-router-dom";
import { Links } from "./Data/LinksData";

function App() {
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
