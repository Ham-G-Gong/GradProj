import { Header } from "../../components/components/Header";
import { ConnectChecker } from "../../components/components/ConnectChecker";
import { HomeTemplate } from "../../components/templates/HomeTemplate";
import { ConnectFailed } from "../../components/components/ConnectFailed";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeTemplate />
    </div>
  );
};
