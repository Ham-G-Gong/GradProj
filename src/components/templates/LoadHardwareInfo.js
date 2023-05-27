import { useEffect, useState } from "react";
import { PercentProgressBar } from "../components/PercentProgressBar";
import { getHWData } from "../modules/getHWData";
import { useInterval } from "../modules/useInterval";
import { TemperProgressBar } from "../components/TemperProgressBar";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { FlexCenterBox } from "../atoms/FlexCenterBox";
import { LoadingComponents } from "../components/LoadingComponent";

export const LoadHardwareInfo = () => {
  const [hardware_performance, setHardwarePerformance] = useState();
  useEffect(() => {
    getHWData(setHardwarePerformance);
  }, []);
  // 2초 간격으로 데이터 받아오려고 합니다.
  useInterval(() => getHWData(setHardwarePerformance));
  return (
    <LoadingComponents condition={hardware_performance}>
      <div style={{ margin: "auto" }}>
        <CustomWhiteText>Hardware Status</CustomWhiteText>
        <br />
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
        <FlexCenterBox>
          <PercentProgressBar
            title={"GPU"}
            percentage={parseInt(hardware_performance?.GPU)}
          />
          <PercentProgressBar
            title={`Memory Status \n[${hardware_performance?.MEM[0]}/${hardware_performance?.MEM[1]}] MB`}
            percentage={(
              (parseInt(hardware_performance?.MEM[0]) /
                parseInt(hardware_performance?.MEM[1])) *
              100
            ).toFixed(0)}
          />
          <PercentProgressBar
            title={`Swap Memory Status \n[${hardware_performance?.S_MEM[0]}/${hardware_performance?.S_MEM[1]}] MB`}
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
      </div>
      <div style={{ margin: "auto" }}>
        <br />
        <CustomWhiteText>Hardware Temperature</CustomWhiteText>
        <FlexCenterBox>
          <TemperProgressBar
            title={"CPU temperature"}
            temperature={parseInt(hardware_performance?.CPU_T)}
          />
          <TemperProgressBar
            title={"GPU temperature"}
            temperature={parseInt(hardware_performance?.GPU_T)}
          />
          <TemperProgressBar
            title={"Thermo temperature"}
            temperature={parseInt(hardware_performance?.Therm_T)}
          />
        </FlexCenterBox>
        <FlexCenterBox>
          <TemperProgressBar
            title={"PLL temperature"}
            temperature={parseInt(hardware_performance?.PLL_T)}
          />
          <TemperProgressBar
            title={"PMIC temperature"}
            temperature={parseInt(hardware_performance?.PMIC_T)}
          />
          <TemperProgressBar
            title={"AO temperature"}
            temperature={parseInt(hardware_performance?.AO_T)}
          />
        </FlexCenterBox>
      </div>
    </LoadingComponents>
  );
};
