// Import: Packages
import React from "react";

// Import: Elements
import { Container, Layout } from "./UserApp.elements";

// Import: Components, Pages
import { Header, Navigation } from "../../components";
import { Dashboard } from "../index";

// Page: UserApp
export default function UserApp() {
  return (
    <>
      <Container data-testid={"userApp"}>
        <Header />

        <Layout>
          <Navigation />

          <Dashboard />
        </Layout>
      </Container>
    </>
  );
}
