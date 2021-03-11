// Import: Packages
import React from "react";

// Import: Elements
import { Container, Header, Wrapper } from "./PatientSuggestion.elements";

// Component: PatientSuggestion
export default function PatientSuggestion() {
  return (
    <>
      <Container data-testid={"patientSuggestion"}>
        <Header>
          <h2>Suggestions</h2>
          <span>Proposed sections to complete</span>
        </Header>

        <Wrapper></Wrapper>
      </Container>
    </>
  );
}
