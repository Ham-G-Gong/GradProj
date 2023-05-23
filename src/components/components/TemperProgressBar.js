import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
export const TemperProgressBar = ({ title, temperature }) => {
  const text = title.split("\n");
  return (
    <div style={{ width: 200, height: 200 }}>
      <CustomWhiteText>{text[0]}</CustomWhiteText>
      <br />
      <CustomWhiteText style={{ fontSize: "12px" }}>{text[1]}</CustomWhiteText>
      <CircularProgressbar
        maxValue={60}
        styles={buildStyles(
          temperature >= 50
            ? { pathColor: "red" }
            : temperature >= 40 && { pathColor: "orange" }
        )}
        value={temperature}
        text={`${temperature}℃`}
      />
    </div>
  );
};
