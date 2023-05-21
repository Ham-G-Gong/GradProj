import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const TemperProgressBar = ({ title, temperature }) => {
  const text = title.split("\n");
  return (
    <div style={{ width: 200, height: 200 }}>
      <strong>{text[0]}</strong>
      <p>{text[1]}</p>
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
