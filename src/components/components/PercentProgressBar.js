import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
export const PercentProgressBar = ({ title, percentage }) => {
  let text = title.split("\n");
  return (
    <div>
      <CustomWhiteText>{text[0]}</CustomWhiteText>
      <CustomWhiteText style={{ fontSize: "16px" }}>
        {text[1] ? text[1] : "\b"}
      </CustomWhiteText>
      <div style={{ width: "100%" }}>
        <CircularProgressbar
          background={true}
          backgroundPadding={5}
          styles={buildStyles({
            ...(percentage >= 90
              ? { pathColor: "red" }
              : percentage >= 80 && { pathColor: "orange" }),
            backgroundColor: "#333333",
            textColor: "white",
            textSize: "16px",
            trailColor: "#666666",
          })}
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
    </div>
  );
};
