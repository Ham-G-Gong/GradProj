import { Header } from "../../components/components/Header";
import { PageRouter } from "../../components/dataAddedComps/PageRouter";

export const Hardware = () => {
  return (
    <div className="home">
      <Header />
      <PageRouter where="Hardware" />
    </div>
  );
};
