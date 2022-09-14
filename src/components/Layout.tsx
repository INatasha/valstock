import React from "react";

import "./Layout.scss";

import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: LayoutProps): JSX.Element {
  const showFooter = true;
  return (
    <div className="layout">
      <Header />
      <div
        className={`layout__page ${showFooter && "layout__page--with-footer"}`}
      >
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default Layout;
