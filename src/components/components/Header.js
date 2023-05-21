import { Link } from "react-router-dom";
import { HorizonBox } from "../atoms/HorizonBox";

export const Header = () => {
  return (
    <header className="header">
      <HorizonBox style={{ backgroundColor: "gray", textAlign: "center" }}>
        <h1>환호우</h1>
        <Link
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            textDecoration: "none",
            color: "black",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            textDecoration: "none",
            color: "black",
          }}
          to="/hardware"
        >
          Hardware
        </Link>
      </HorizonBox>
    </header>
  );
};
