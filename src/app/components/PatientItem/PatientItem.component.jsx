// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as TopUserIcon } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  DetailContainer,
  IconContainer,
  Name,
  Wrapper,
} from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem() {
  return (
    <>
      <Container data-testid={"patientItem"}>
        {/* Patient Name */}
        {/* Age */}
        {/* Complaint */}
        {/* RAG User Icon */}
        {/* NEWS Score */}

        <Wrapper>
          <IconContainer>
            <TopUserIcon />
            <span>A&amp;E</span>
          </IconContainer>

          <DetailContainer>
            <Name>Ronnie Pickering</Name>
            <span>Age: 32 yrs</span>
          </DetailContainer>

          <DetailContainer>
            <span>A00 - Cardiac arrest</span>
            <span>NEWS: 2</span>
          </DetailContainer>
        </Wrapper>
      </Container>
    </>
  );
}
