import { HardwareBreifBox } from "./HardwareBreifBox";
import { LoadImage } from "./LoadImage";
import { ModuleInfoBox } from "./ModuleInfoBox";

export const HomeTemplate = () => {
  return (
    <>
      <ModuleInfoBox />
      <LoadImage />
      <HardwareBreifBox />
    </>
  );
};
