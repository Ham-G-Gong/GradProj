import { FlexCenterBox } from "../atoms/FlexCenterBox";
import { PercentProgressBar } from "./PercentProgressBar";

export const HWPercentageBox = ({ hardware_performance }) => {
  return (
    <FlexCenterBox>
      <PercentProgressBar
        title={"GPU"}
        percentage={parseInt(hardware_performance?.GPU)}
      />
      <PercentProgressBar
        title={`Memory \n[${hardware_performance?.MEM[0]}/${hardware_performance?.MEM[1]}] MB`}
        percentage={(
          (parseInt(hardware_performance?.MEM[0]) /
            parseInt(hardware_performance?.MEM[1])) *
          100
        ).toFixed(0)}
      />
      <PercentProgressBar
        title={`Swap Memory \n[${hardware_performance?.S_MEM[0]}/${hardware_performance?.S_MEM[1]}] MB`}
        percentage={(
          (parseInt(hardware_performance?.S_MEM[0]) /
            parseInt(hardware_performance?.S_MEM[1])) *
          100
        ).toFixed(0)}
      />
      <PercentProgressBar
        title={`Storage \n[${hardware_performance?.DISK[0]}/${hardware_performance?.DISK[1]}] Byte`}
        percentage={parseInt(hardware_performance?.DISK[2])}
      />
    </FlexCenterBox>
  );
};
