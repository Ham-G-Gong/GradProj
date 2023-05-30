import { PercentageComponent } from "./PercentageComponent";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { LoadingComponents } from "./LoadingComponent";
import { BsDot } from "react-icons/bs";

export const ModulePerformanceBox = ({ selectedModule }) => {
  const perform = [
    { name: "FANet", MDS: "0.5392", ME: "0.9052" },
    { name: "REDNet", MDS: "0.4987", ME: "1.0229" },
    { name: "UNet", MDS: "0.2928", ME: "0.0124" },
  ];
  selectedModule = selectedModule?.slice(9, -4);
  const now = perform.filter((p) => selectedModule === p.name)[0];
  return (
    <div>
      <CustomWhiteText style={{ fontSize: "26px" }}>
        Current Model Performance
      </CustomWhiteText>
      <LoadingComponents condition={selectedModule}>
        <PercentageComponent
          title="Mean Dice Score"
          value={Math.round(now?.MDS * 100)}
        />
        <CustomWhiteText>
          <BsDot />
          Mean Execution Time : {now?.ME} sec
        </CustomWhiteText>
      </LoadingComponents>
    </div>
  );
};
