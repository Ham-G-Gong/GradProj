import { useEffect, useState } from "react";
import { PercentageComponent } from "../components/PercentageComponent";
import { useInterval } from "../modules/useInterval";
import { getHWData } from "../modules/getHWData";

export const HardwareBreifBox = () => {
  const [hardware_performance, setHardwarePerformance] = useState();
  useEffect(() => {
    getHWData(setHardwarePerformance);
  }, []);
  // 2초 간격으로 데이터 받아오려고 합니다.
  useInterval(setHardwarePerformance, getHWData);
  if (!!hardware_performance)
    return (
      <div>
        <p>Hardware Brief Status</p>
        {hardware_performance.CPU.map((element, index) => {
          return (
            <PercentageComponent
              key={index}
              title={`CPU${index}`}
              value={parseInt(element)}
            />
          );
        })}
        <PercentageComponent
          title="GPU"
          value={parseInt(hardware_performance.GPU)}
        />
        <p>전력소모량 {hardware_performance.InferenceTime}</p>
      </div>
    );
  else return <div />;
};
