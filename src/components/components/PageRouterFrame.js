import { ConnectFailed } from "./ConnectFailed";

export const PageRouterFrame = ({ connect_state, ConnectSuccessComponent }) => {
  if (connect_state) {
    console.log("Device is connected.");
    return (
      <div>
        연결 굿
        <ConnectSuccessComponent />
      </div>
    );
  } else return <ConnectFailed />;
};
