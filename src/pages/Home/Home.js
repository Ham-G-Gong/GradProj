import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      홈 입니다. 첫 페이지
      <Link to="Hardware">하드웨어로이동</Link>
    </div>
  );
};
