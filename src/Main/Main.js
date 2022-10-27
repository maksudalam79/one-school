import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/pages/Footer";
import Leftside from "../layout/pages/Leftside";
import Navber from "../layout/pages/Navber";
import Registration from "../layout/pages/Registration";

const Main = () => {
  return (
    <div className="row ">
      <Navber></Navber>
      <div className="">
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
