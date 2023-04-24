import { ConnectChecker } from "../../components/components/ConnectChecker";
import { Header } from "../../components/components/Header";
import { HardwareTemplate } from "../../components/templates/HardwareTemplate";

export const Hardware = () => {
  return (
    <div className="home">
      <Header />
      <ConnectChecker>
        <HardwareTemplate />
      </ConnectChecker>
    </div>
  );
};
