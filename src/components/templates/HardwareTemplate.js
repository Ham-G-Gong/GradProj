import { ConnectChecker } from "../components/ConnectChecker";
import { ConnectFailed } from "../components/ConnectFailed";
import { LoadHardwareInfo } from "./LoadHardwareInfo";

export const HardwareTemplate = () => {
  return (
    <ConnectChecker ErrorComponent={ConnectFailed}>
      <LoadHardwareInfo />
    </ConnectChecker>
  );
};
