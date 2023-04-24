import { useState } from "react";
import { PercentageComponent } from "../components/PercentageComponent";
import { useInterval } from "../modules/useInterval";
import { getHWData } from "../modules/getHWData";

export const HardwareBreifBox = () => {
  const [hardware_performance, setHardwarePerformance] = useState({
    // 데이터 받아오는 함수를 바로 넣어줍시다. 인터벌때매 처음 시작이 시간이 걸리네요.
  });
  // 2초 간격으로 데이터 받아오려고 합니다.
  useInterval(setHardwarePerformance, getHWData);
  return (
    <div>
      <p>Model Performance</p>
      <PercentageComponent title="CPU" value={hardware_performance.cpu} />
      <PercentageComponent title="GPU" value={hardware_performance.gpu} />
      <p>전력소모량 {hardware_performance.InferenceTime}</p>
    </div>
  );
};