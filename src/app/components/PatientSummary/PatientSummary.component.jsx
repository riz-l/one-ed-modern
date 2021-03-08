// Import: Packages
import React from "react";
import { Header } from "../PatientList/PatientList.elements";

// Import: Assets
import { ReactComponent as PatientSummaryIcon } from "../../../assets/img/icon/patientSummary-patient.svg";

// Import: Elements
import {
  Container,
  DetailsWrapper,
  IconContainer,
  NameContainer,
  SummaryContainer,
  SummaryDetails,
  SummaryHeader,
  Wrapper,
} from "./PatientSummary.elements";

// Component: PatientSummary
export default function PatientSummary() {
  return (
    <>
      <Container data-testid={"patientSummary"}>
        <Wrapper>
          <Header>
            <h2>Patient Summary</h2>
          </Header>

          <DetailsWrapper>
            <SummaryContainer>
              <SummaryHeader>
                <IconContainer>
                  <PatientSummaryIcon />
                </IconContainer>

                <NameContainer>
                  <h3>Jane</h3>
                  <h3>Doe</h3>
                </NameContainer>
              </SummaryHeader>

              <SummaryDetails>
                <p>Age: 24</p>
                <p>Reported Condition: A00 - Cardiac Arrest</p>
                <p>Gender: Female</p>
                <p>Allergies: Nuts, milk, silicon</p>
                <p>Medications: Strong painkillers, antibiotics</p>
              </SummaryDetails>
            </SummaryContainer>
          </DetailsWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
