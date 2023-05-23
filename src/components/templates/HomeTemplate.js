import { CustomPageView } from "../atoms/CustomPageView";
import { HardwareBreifBox } from "./HardwareBreifBox";
import { LoadImage } from "./LoadImage";
import { ModuleInfoBox } from "./ModuleInfoBox";

export const HomeTemplate = () => {
  return (
    <CustomPageView>
      <ModuleInfoBox />
      <LoadImage />
      <HardwareBreifBox />
    </CustomPageView>
  );
};
