import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Hardware } from "./hardware";
import { Error } from "./error";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={""} element={<Home />}></Route>
          <Route path={"hardware"} element={<Hardware />}></Route>
          <Route path={"error"} element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
