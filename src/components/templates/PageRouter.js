import { PageRouterFrame } from "../components/PageRouterFrame";
import { LoadHardwareInfo } from "./LoadHardwareInfo";
import { LoadImage } from "./LoadImage";

export const PageRouter = ({ where }) => {
  /**
   * TODO:: infocomponent 구현 HOME 따로 Hardware 따로
   *
   */
  return (
    <PageRouterFrame
      connect_state={true}
      ConnectSuccessComponent={() => {
        if (where === "Home") return <LoadImage />;
        if (where === "Hardware") return <LoadHardwareInfo />;
      }}
    />
  );
};
