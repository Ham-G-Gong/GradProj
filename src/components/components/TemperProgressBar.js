import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
export const TemperProgressBar = ({ title, temperature }) => {
  const text = title.split("\n");
  return (
    <div>
      <CustomWhiteText>{text[0]}</CustomWhiteText>
      <CustomWhiteText style={{ fontSize: "16px" }}>
        {text[1] ? text[1] : "\b"}
      </CustomWhiteText>
      <CircularProgressbar
        maxValue={60}
        background={true}
        backgroundPadding={5}
        styles={buildStyles({
          ...(temperature >= 50
            ? { pathColor: "red" }
            : temperature >= 40 && { pathColor: "orange" }),
          backgroundColor: "#333333",
          textColor: "white",
          textSize: "16px",
          trailColor: "#666666",
        })}
        value={temperature}
        text={`${temperature}℃`}
      />
    </div>
  );
};
