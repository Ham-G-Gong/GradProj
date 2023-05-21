import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const PercentProgressBar = ({ title, percentage }) => {
  let text = title.split("\n");
  return (
    <div style={{ width: 200, height: 200 }}>
      <strong>{text[0]}</strong>
      <pre>{text[1]}</pre>
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
