import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Hardware } from "./hardware";
import { Error } from "./error";

export const App = () => {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#333333",
      }}
    >
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
