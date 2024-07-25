import React from "react";
import styled from "styled-components";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children, loggedUser }) => {
  return (
    <LayoutWrapper>
      <Header loggedUser={loggedUser} />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;
