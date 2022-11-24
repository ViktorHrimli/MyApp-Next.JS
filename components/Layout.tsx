import Header from "./Header";
import Footer from "./Footer";
import React, { FC, ReactNode } from "react";
type LayoutType = {
  children: ReactNode;
};

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
