import { HardwareBreifBox } from "../components/HardwareBreifBox";
import { LoadImage } from "./LoadImage";
import { ModuleInfoBox } from "./ModuleInfoBox";

export const HomeTemplate = ({ hardware_performance }) => {
  return (
    <>
      <ModuleInfoBox />
      <LoadImage />
      <HardwareBreifBox hardware_performance={hardware_performance} />
    </>
  );
};
