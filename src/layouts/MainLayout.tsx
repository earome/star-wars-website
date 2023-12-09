import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Components

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;