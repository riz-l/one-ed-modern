// Import: Packages
import React from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";

// Import:  Pages
import { Dashboard, Home, Login } from "./app/pages";

// Component: App
export default function App() {
  return (
    <>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    </>
  );
}

// Element: Container
const Container = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  max-height: 100vh;
  min-height: 100vh;
  width: 100%;
`;
