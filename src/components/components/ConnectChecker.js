import { ConnectFailed } from "./ConnectFailed";

export const ConnectChecker = ({ children }) => {
  try {
    return <div>{children}</div>;
  } catch (e) {
    return <ConnectFailed />;
  }
};
