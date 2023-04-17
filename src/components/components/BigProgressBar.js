import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const BigProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
};
