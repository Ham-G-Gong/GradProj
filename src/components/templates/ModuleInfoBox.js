import { HorizonBox } from "../atoms/HorizonBox";
import { ModuleDropdown } from "./ModuleDropdown";
import { ModulePerformanceBox } from "../components/ModulePerformanceBox";

export const ModuleInfoBox = () => {
  return (
    <HorizonBox>
      <ModulePerformanceBox />
      <ModuleDropdown />
    </HorizonBox>
  );
};
