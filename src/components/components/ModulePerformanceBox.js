import { useEffect, useState } from "react";
import { getSWData } from "../modules/getSWData";
import { PercentageComponent } from "./PercentageComponent";
import { CustomWhiteText } from "../atoms/CustomWhiteText";

export const ModulePerformanceBox = () => {
  const [model_performance, setModelPerformance] = useState({});
  useEffect(() => getSWData(setModelPerformance), []);
  if (!!model_performance)
    return (
      <div>
        <CustomWhiteText style={{ fontSize: "20px" }}>
          Model Performance
        </CustomWhiteText>
        <PercentageComponent
          title="Accuracy"
          value={model_performance.accuracy}
        />
        <CustomWhiteText>
          Inference Time {model_performance.inference_time}
        </CustomWhiteText>
      </div>
    );
  else return <div />;
};
