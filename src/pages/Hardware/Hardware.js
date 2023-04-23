import { Header } from "../../components/components/Header";
import { ConnectChecker } from "../../components/components/ConnectChecker";
import { HardwareTemplate } from "../../components/templates/HardwareTemplate";
import { ConnectFailed } from "../../components/components/ConnectFailed";

export const Hardware = () => {
  return (
    <div className="home">
      <Header />
      <HardwareTemplate />
    </div>
  );
};
