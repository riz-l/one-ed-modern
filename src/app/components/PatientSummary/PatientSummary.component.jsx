// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./PatientSummary.elements";

// Component: PatientSummary
export default function PatientSummary() {
  return (
    <>
      <Container data-testid={"patientSummary"}>
        <h3>Patient Summary</h3>
      </Container>
    </>
  );
}
