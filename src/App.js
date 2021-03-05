// Import: Packages
import React from "react";
import styled from "styled-components";

// Import: Components, Pages
import { Navigation } from "./app/components";

// Component: App
export default function App() {
  return (
    <>
      <Container>
        <Layout>
          <Side>
            <Navigation />
          </Side>

          <Main>main</Main>
        </Layout>
      </Container>
    </>
  );
}

// Element: Container
const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

// Element: Layout
const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
`;

// Element: Side
const Side = styled.div`
  flex: 280px;
  height: 100%;
  min-height: 100vh;
  width: 280px;
`;

// Element: Main
const Main = styled.div`
  flex: auto;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;
