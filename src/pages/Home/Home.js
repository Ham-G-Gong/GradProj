import { ConnectChecker } from "../../components/components/ConnectChecker";
import { Header } from "../../components/components/Header";
import { HomeTemplate } from "../../components/templates/HomeTemplate";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <ConnectChecker>
        <HomeTemplate />
      </ConnectChecker>
    </div>
  );
};
