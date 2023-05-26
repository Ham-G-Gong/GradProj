import { CustomLink } from "../atoms/CustomLink";
import { FlexBox } from "../atoms/FlexBox";

export const Header = () => {
  return (
    <header className="header">
      <FlexBox
        style={{
          backgroundColor: "#222222",
          padding: "0.5%",
        }}
      >
        <h1
          style={{
            marginLeft: "3%",
            marginRight: "6%",
            color: "white",
            alignItems: "center",
          }}
        >
          환호우
        </h1>
        <CustomLink dest="/">Home</CustomLink>
        <CustomLink dest="/hardware">Hardware</CustomLink>
      </FlexBox>
    </header>
  );
};
