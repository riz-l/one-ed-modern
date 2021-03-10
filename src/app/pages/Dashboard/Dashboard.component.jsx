// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  Layout,
  ListContainer,
  WorkflowContainer,
} from "./Dashboard.elements";

// Import: Components
import { Header, Navigation, PatientList } from "../../components";

// Page: Dashboard
export default function Dashboard() {
  return (
    <>
      <Container data-testid={"dashboard"}>
        <Header />

        <Layout>
          <Navigation />

          <ListContainer>
            <PatientList />
          </ListContainer>

          <WorkflowContainer>b</WorkflowContainer>
        </Layout>
      </Container>
    </>
  );
}
