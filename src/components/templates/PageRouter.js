import { useState } from "react";
import { getHWData } from "../modules/getHWData";
import { useInterval } from "../modules/useInterval";
import { ConnectChecker } from "../components/ConnectChecker";
import { HomeTemplate } from "./HomeTemplate";
import { HardwareTemplate } from "./HardwareTemplate";
import { ConnectFailed } from "../components/ConnectFailed";

export const PageRouter = ({ where }) => {
  const [hardware_performance, setHardwarePerformance] = useState({
    // 데이터 받아오는 함수를 바로 넣어줍시다. 인터벌때매 처음 시작이 시간이 걸리네요.
    CPU: 0,
    GPU: 0,
  });
  // 2초 간격으로 데이터 받아오려고 합니다.
  useInterval(setHardwarePerformance, getHWData);
  return (
    <ConnectChecker ErrorComponent={ConnectFailed}>
      {where === "Home" && (
        <HomeTemplate hardware_performance={hardware_performance} />
      )}
      {where === "Hardware" && (
        <HardwareTemplate hardware_performance={hardware_performance} />
      )}
    </ConnectChecker>
  );
};
