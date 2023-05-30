import { FlexCenterBox } from "../atoms/FlexCenterBox";
import { PercentProgressBar } from "./PercentProgressBar";

export const CPUPercentageBox = ({ hardware_performance }) => {
  return (
    <FlexCenterBox>
      {hardware_performance?.CPU.map((element, index) => {
        return (
          <PercentProgressBar
            key={index}
            title={`CPU ${index}`}
            percentage={parseInt(element)}
          />
        );
      })}
    </FlexCenterBox>
  );
};
