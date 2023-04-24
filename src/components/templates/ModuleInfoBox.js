import { useEffect, useState } from "react";
import { PercentageComponent } from "../components/PercentageComponent";
import { getSWData } from "../modules/getSWData";

export const ModuleInfoBox = () => {
  const [model_performance, setModelPerformance] = useState({
    // 데이터 받아오는 함수를 바로 넣어줍시다. 인터벌때매 처음 시작이 시간이 걸리네요.
  });
  const data = getSWData();
  useEffect(() => setModelPerformance(data), []);
  return (
    <div>
      <p>Model Performance</p>
      <PercentageComponent
        title="Accuracy"
        value={model_performance.accuracy}
      />
      <p>Inference Time {model_performance.inference_time}</p>
    </div>
  );
};
