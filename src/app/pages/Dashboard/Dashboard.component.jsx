// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  Heading,
  ListWrapper,
  SummaryWrapper,
  Wrapper,
} from "./Dashboard.elements";

// Import: Components
import { PatientList } from "../../components";

// Page: Dashboard
export default function Dashboard() {
  return (
    <>
      <Container>
        <Heading>
          <h1>Dashboard</h1>
        </Heading>

        <Wrapper>
          <ListWrapper>
            <PatientList />
          </ListWrapper>

          <SummaryWrapper>b</SummaryWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
