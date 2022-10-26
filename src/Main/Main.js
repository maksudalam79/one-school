import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/pages/Footer";
import Leftside from "../layout/pages/Leftside";
import Navber from "../layout/pages/Navber";

const Main = () => {
  return (
    <div className="row ">
      <Navber></Navber>
      <div className="grid grid-cols-2 m-4">
        <div>
          <Leftside></Leftside>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
