import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Root;
