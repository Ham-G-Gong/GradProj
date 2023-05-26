import { ModuleDropdown } from "./ModuleDropdown";
import { ModulePerformanceBox } from "../components/ModulePerformanceBox";
import { FlexPushBox } from "../atoms/FlexPushBox";

export const ModuleInfoBox = () => {
  return (
    <FlexPushBox>
      <ModulePerformanceBox />
      <ModuleDropdown />
    </FlexPushBox>
  );
};
