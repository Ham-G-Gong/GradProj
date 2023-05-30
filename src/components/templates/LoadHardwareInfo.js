import { useEffect, useState } from "react";
import { PercentProgressBar } from "../components/PercentProgressBar";
import { getHWData } from "../modules/getHWData";
import { useInterval } from "../modules/useInterval";
import { TemperProgressBar } from "../components/TemperProgressBar";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { FlexCenterBox } from "../atoms/FlexCenterBox";
import { LoadingComponents } from "../components/LoadingComponent";
import { HWPercentageBox } from "../components/HWPercentageBox";
import { TemperatureBox } from "../components/TemperatureBox";
import { CPUPercentageBox } from "../components/CPUPercentageBox";

export const LoadHardwareInfo = () => {
  const [hardware_performance, setHardwarePerformance] = useState();
  useEffect(() => {
    getHWData(setHardwarePerformance);
  }, []);
  // 2초 간격으로 데이터 받아오려고 합니다.
  useInterval(() => getHWData(setHardwarePerformance));
  return (
    <LoadingComponents condition={hardware_performance}>
      <div style={{ margin: "auto", width: "100%" }}>
        <CustomWhiteText>Hardware Status</CustomWhiteText>
        <br />
        <CPUPercentageBox hardware_performance={hardware_performance} />
        <HWPercentageBox hardware_performance={hardware_performance} />
      </div>
      <TemperatureBox hardware_performance={hardware_performance} />
    </LoadingComponents>
  );
};
