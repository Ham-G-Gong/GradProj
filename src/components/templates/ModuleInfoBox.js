import { ModuleDropdown } from "./ModuleDropdown";
import { ModulePerformanceBox } from "../components/ModulePerformanceBox";
import { FlexPushBox } from "../atoms/FlexPushBox";

export const ModuleInfoBox = ({ result }) => {
  return (
    <FlexPushBox>
      <ModulePerformanceBox result={result} />
      <ModuleDropdown />
    </FlexPushBox>
  );
};
