// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as PatientSummaryIcon } from "../../../assets/img/icon/patientSummary-patient.svg";

// Import: Elements
import {
  Container,
  Header,
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
                <span>Age: 24</span>
                <span>Reported Condition: A00 - Cardiac Arrest</span>
                <span>Gender: Female</span>
                <span>Allergies: Nuts, milk, silicon</span>
                <span>Medications: Strong painkillers, antibiotics</span>
              </SummaryDetails>
            </SummaryContainer>
          </DetailsWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
