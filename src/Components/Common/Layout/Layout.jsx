import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../StudentPortal/Navbar/Navbar";

const Layout = ({ admin }) => {
  return (
    <>
      <Navbar admin={admin} />
      <section className="py-6 bg-primary">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
