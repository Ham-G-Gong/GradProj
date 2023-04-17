import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1>팀 이름</h1>
      <Link to="/">Home </Link>
      <Link to="/hardware">Hardware</Link>
    </header>
  );
};
