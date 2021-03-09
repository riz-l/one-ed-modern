// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./PatientList.elements";

// Import: Components
import { PatientItem } from "../index";

// Component: PatientList
export default function PatientList() {
  return (
    <>
      <Container data-test-id={"patientList"}>
        <Wrapper>
          <h1>Patient List</h1>

          <PatientItem />
        </Wrapper>
      </Container>
    </>
  );
}
