import React from "react";
import {Link, Outlet} from "react-router-dom";

const OtherLayout = () => {
  return (
    <div>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Outlet />
    </div>
  );
};

export default OtherLayout;
