import { NavLink } from "react-router-dom";
import { CustomWhiteText } from "./CustomWhiteText";

export const CustomLink = ({ dest, children }) => {
  return (
    <NavLink
      to={dest}
      style={({ isActive }) => ({
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "3%",
        textDecoration: "none",
        color: "black",
        borderWidth: "1px",
        borderColor: "black",
        padding: "10px",
        fontWeight: isActive ? "bolder" : "lighter",
      })}
    >
      <CustomWhiteText style={{ fontSize: "25px" }}>{children}</CustomWhiteText>
    </NavLink>
  );
};
