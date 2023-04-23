import { ConnectChecker } from "../components/ConnectChecker";
import { ConnectFailed } from "../components/ConnectFailed";
import { LoadImage } from "./LoadImage";

export const HomeTemplate = () => {
  return (
    <ConnectChecker ErrorComponent={ConnectFailed}>
      <LoadImage />
    </ConnectChecker>
  );
};
