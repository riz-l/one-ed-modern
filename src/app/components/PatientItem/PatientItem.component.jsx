// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem() {
  return (
    <>
      <Container data-testid={"patientItem"}>
        <h2>Patient Item</h2>
      </Container>
    </>
  );
}
