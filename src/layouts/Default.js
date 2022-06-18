import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

function Default() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Default;
