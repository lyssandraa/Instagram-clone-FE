import React from "react";
import styled from "styled-components";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children, loggedUser }) => {
  return (
    <div>
      <Header loggedUser={loggedUser} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
