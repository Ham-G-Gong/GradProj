import { ModuleDropdown } from "./ModuleDropdown";
import { ModulePerformanceBox } from "../components/ModulePerformanceBox";
import { FlexPushBox } from "../atoms/FlexPushBox";
import { useState } from "react";

export const ModuleInfoBox = ({ result }) => {
  const [selectedModule, setSelectedModule] = useState();
  return (
    <FlexPushBox>
      <ModulePerformanceBox selectedModule={selectedModule} />
      <ModuleDropdown
        selectedModule={selectedModule}
        setSelectedModule={setSelectedModule}
      />
    </FlexPushBox>
  );
};
