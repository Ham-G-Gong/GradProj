import { useState } from "react";
import { PercentageComponent } from "../components/PercentageComponent";

export const ModuleInfoBox = () => {
  const [model_performance, setModelPerformance] = useState({
    // 데이터 받아오는 함수를 바로 넣어줍시다. 인터벌때매 처음 시작이 시간이 걸리네요.
    Accuracy: 0,
    InferenceTime: 0,
  });
  return (
    <div>
      <p>Model Performance</p>
      <PercentageComponent
        title="Accuracy"
        value={model_performance.Accuracy}
      />
      <p>Inference Time {model_performance.InferenceTime}</p>
    </div>
  );
};
