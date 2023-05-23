import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
export const PercentProgressBar = ({ title, percentage }) => {
  let text = title.split("\n");
  return (
    <div style={{ width: 200, height: 200 }}>
      <CustomWhiteText>{text[0]}</CustomWhiteText>
      <br />
      <CustomWhiteText style={{ fontSize: "12px" }}>{text[1]}</CustomWhiteText>
      <CircularProgressbar
        styles={buildStyles(
          percentage >= 90
            ? { pathColor: "red" }
            : percentage >= 80 && { pathColor: "orange" }
        )}
        value={percentage}
        text={`${percentage}%`}
      />
    </div>
  );
};
