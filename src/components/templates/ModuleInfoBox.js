import { HorizonBox } from "../atoms/HorizonBox";
import { ModuleDropdown } from "../components/ModuleDropdown";
import { ModulePerformanceBox } from "../components/ModulePerformanceBox";

export const ModuleInfoBox = () => {
  return (
    <HorizonBox>
      <ModulePerformanceBox />
      <ModuleDropdown />
    </HorizonBox>
  );
};
