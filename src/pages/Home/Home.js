import { Header } from "../../components/components/Header";
import { PageRouter } from "../../components/templates/PageRouter";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <PageRouter where="Home" />
    </div>
  );
};
