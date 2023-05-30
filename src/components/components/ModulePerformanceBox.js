import { useEffect, useState } from "react";
import { getProcessResult } from "../modules/getProcessResult";
import { PercentageComponent } from "./PercentageComponent";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { LoadingComponents } from "./LoadingComponent";

export const ModulePerformanceBox = ({ result: model_performance }) => {
  if (!!model_performance)
    return (
      <div>
        <CustomWhiteText style={{ fontSize: "26px" }}>
          Model Performance
        </CustomWhiteText>
        <LoadingComponents condition={model_performance}>
          <PercentageComponent
            title="Accuracy"
            value={model_performance?.accuracy}
          />
          <CustomWhiteText>
            Inference Time {model_performance?.inference_time}
          </CustomWhiteText>
        </LoadingComponents>
      </div>
    );
  else return <div />;
};
