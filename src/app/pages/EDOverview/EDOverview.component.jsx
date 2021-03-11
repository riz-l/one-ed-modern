// Import: Packages
import React from "react";

// Import: Elements
import { Container, Layout } from "./EDOverview.elements";

// Import: Components
import { Header, Navigation } from "../../components";

// Page: EDOverview
export default function EDOverview() {
  return (
    <>
      <Container data-testid={"edOverview"}>
        <Header />

        <Layout>
          <h1>ED Overview</h1>
        </Layout>
      </Container>
    </>
  );
}
