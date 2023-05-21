import { useEffect, useMemo, useState } from "react";
import { getModuleListAndNow } from "../modules/getModuleListAndNow";
import { ModuleList } from "./ModuleList";

export const ModuleDropdown = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { list: module_list, now } = useMemo(() => getModuleListAndNow(), []);
  const [selectedModule, setSelectedModule] = useState(now);
  if (!!module_list)
    return (
      <>
        <strong>
          <pre>Select Module</pre>
        </strong>
        <button onClick={() => setIsClicked((state) => !state)}>
          {selectedModule}
        </button>
        {isClicked && (
          <ModuleList
            module_list={module_list}
            now={selectedModule}
            setNow={setSelectedModule}
            setIsClicked={setIsClicked}
          />
        )}
      </>
    );
  else return <div />;
};
