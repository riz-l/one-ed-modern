// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  Details,
  DetailsColumn,
  DetailsContainer,
  DetailsHeading,
  DetailsItem,
  DetailsWrapper,
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
            <DetailsWrapper>
              <DetailsColumn>
                <DetailsItem>
                  <DetailsHeading>Name</DetailsHeading>
                  <Details>John Smith</Details>
                </DetailsItem>

                <DetailsItem>
                  <DetailsHeading>Age</DetailsHeading>
                  <Details>34 years</Details>
                </DetailsItem>
              </DetailsColumn>

              <DetailsColumn>
                <DetailsItem>
                  <DetailsHeading>Condition</DetailsHeading>
                  <Details>A00 - Cardiac arrest</Details>
                </DetailsItem>

                <DetailsItem>
                  <DetailsHeading>NEWS</DetailsHeading>
                  <Details>2</Details>
                </DetailsItem>
              </DetailsColumn>
            </DetailsWrapper>
          </DetailsContainer>
        </Wrapper>
      </Container>
    </>
  );
}
