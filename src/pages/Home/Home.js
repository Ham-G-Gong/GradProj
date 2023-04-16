import { Header } from "../../components/components/Header";
import { MainPage } from "../../components/dataAddedComps/MainPage";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <MainPage where="Home" />
    </div>
  );
};
