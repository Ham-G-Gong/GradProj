import { Link } from "react-router-dom";
import { HorizonBox } from "../atoms/HorizonBox";
import { CustomLink } from "../atoms/CustomLink";

export const Header = () => {
  return (
    <header className="header">
      <HorizonBox
        style={{
          backgroundColor: "#222222  ",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginLeft: "2%", marginRight: "7%", color: "white" }}>
          환호우
        </h1>
        <CustomLink dest="/">Home</CustomLink>
        <CustomLink dest="/hardware">Hardware</CustomLink>
      </HorizonBox>
    </header>
  );
};
