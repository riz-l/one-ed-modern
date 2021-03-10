// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  DetailsContainer,
  IconContainer,
  Wrapper,
} from "./PatientItem.elements";

// Component: PatientItem
export default function PatientItem() {
  return (
    <>
      <Container data-testid={"patientItem"}>
        <Wrapper>
          <IconContainer>
            <UserSvg />
            <span>A&amp;E</span>
          </IconContainer>

          <DetailsContainer>
            <span>John Smith</span>
            <span>34 years</span>
          </DetailsContainer>

          <DetailsContainer>
            <span>A00 - Cardiac arrest</span>
            <span>NEWS: 5</span>
          </DetailsContainer>
        </Wrapper>
      </Container>
    </>
  );
}
