import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Hardware } from "./hardware";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={""} element={<Home />}></Route>
          <Route path={"hardware"} element={<Hardware />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
