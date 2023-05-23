import { useCallback, useEffect, useState } from "react";
import { getModuleListAndNow } from "../modules/getModuleListAndNow";
import { ModuleList } from "../components/ModuleList";
import { CustomWhiteText } from "../atoms/CustomWhiteText";

export const ModuleDropdown = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedModule, setSelectedModule] = useState();
  const [moduleList, setModuleList] = useState();
  useEffect(() => {
    getModuleListAndNow(setModuleList, setSelectedModule);
    console.log("ModuleDropdown: in useeffect");
  }, []);
  console.log("moduledropdown");
  return (
    !!moduleList && (
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <CustomWhiteText>Select Module</CustomWhiteText>
        <button onClick={() => setIsClicked((state) => !state)}>
          {selectedModule}
        </button>
        {isClicked && (
          <ModuleList
            module_list={moduleList}
            now={selectedModule}
            setNow={setSelectedModule}
            setIsClicked={setIsClicked}
          />
        )}
      </div>
    )
  );
};
