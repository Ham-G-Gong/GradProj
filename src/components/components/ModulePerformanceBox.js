import { useEffect, useState } from "react";
import { getSWData } from "../modules/getSWData";
import { PercentageComponent } from "./PercentageComponent";

export const ModulePerformanceBox = () => {
  const [model_performance, setModelPerformance] = useState({});
  useEffect(() => getSWData(setModelPerformance), []);
  if (!!model_performance)
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
  else return <div />;
};
