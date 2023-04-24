import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const BigProgressBar = ({ title, percentage }) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <p>{title}</p>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
};
