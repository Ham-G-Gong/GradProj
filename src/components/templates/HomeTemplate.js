import { useState } from "react";
import { CustomPageView } from "../atoms/CustomPageView";
import { HardwareBreifBox } from "./HardwareBreifBox";
import { LoadImage } from "./LoadImage";
import { ModuleInfoBox } from "./ModuleInfoBox";
import { getProcessResult } from "../modules/getProcessResult";
import { useInterval } from "../modules/useInterval";

export const HomeTemplate = () => {
  const [imageName, setImageName] = useState();
  useInterval(() => getProcessResult(setImageName));
  return (
    <CustomPageView>
      <ModuleInfoBox />
      <LoadImage img_name={imageName} />
      <HardwareBreifBox />
    </CustomPageView>
  );
};
