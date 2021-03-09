// Import: Packages
import React from "react";

// Import: Elements
import { Container, Header, Wrapper } from "./PatientList.elements";

// Import: Components
import { PatientItem } from "../index";

// Component: PatientList
export default function PatientList() {
  return (
    <>
      <Container data-test-id={"patientList"}>
        <Header>
          <h2>Patient List</h2>
        </Header>

        <Wrapper>
          <PatientItem />
          <PatientItem />
          <PatientItem />
          <PatientItem />
          <PatientItem />
          <PatientItem />
          <PatientItem />
          <PatientItem />
          <PatientItem />
        </Wrapper>
      </Container>
    </>
  );
}
