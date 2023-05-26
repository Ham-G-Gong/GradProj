import { CustomPageView } from "../atoms/CustomPageView";
import { LoadHardwareInfo } from "./LoadHardwareInfo";

export const HardwareTemplate = () => {
  return (
    <CustomPageView>
      <LoadHardwareInfo />
    </CustomPageView>
  );
};
