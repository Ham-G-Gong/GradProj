import { Header } from "../../components/components/Header";
import { PageRouter } from "../../components/templates/PageRouter";

export const Hardware = () => {
  return (
    <div className="home">
      <Header />
      <PageRouter where="Hardware" />
    </div>
  );
};
