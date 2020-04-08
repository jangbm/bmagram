import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Footer from "./Footer";
import Router from "./Router";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

const QUERY = gql`
  {
    isLoggenIn @client
  }
`;

export default () => {
  const {
    data: { isLoggenIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Wrapper>
          <GlobalStyles />
          <Router isLoggenIn={isLoggenIn} />
          <Footer />
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
