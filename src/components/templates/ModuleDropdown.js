import { useCallback, useEffect, useState } from "react";
import { getModuleListAndNow } from "../modules/getModuleListAndNow";
import { ModuleList } from "../components/ModuleList";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { FaAngleDown } from "react-icons/fa";

export const ModuleDropdown = ({ selectedModule, setSelectedModule }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [moduleList, setModuleList] = useState();
  useEffect(() => {
    getModuleListAndNow(setModuleList, setSelectedModule);
    console.log("ModuleDropdown: in useeffect");
  }, []);
  console.log("moduledropdown");
  return (
    <div>
      <CustomWhiteText style={{ fontSize: "26px" }}>
        Select Module
      </CustomWhiteText>
      <div>
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            onClick={() => setIsClicked((state) => !state)}
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "23px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontWeight: "bold",
                color: "#DDDDDD",
              }}
            >
              {selectedModule ? selectedModule : "Loading..."}
            </p>
            <FaAngleDown
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "3px",
                transition: "transform 250ms ease-out",
                transform: isClicked ? "rotate(-180deg)" : "",
              }}
            />
          </div>
          {isClicked && (
            <ModuleList
              module_list={moduleList}
              now={selectedModule}
              setNow={setSelectedModule}
              setIsClicked={setIsClicked}
            />
          )}
        </div>
      </div>
    </div>
  );
};
