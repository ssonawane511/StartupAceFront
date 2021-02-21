/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default Home;
