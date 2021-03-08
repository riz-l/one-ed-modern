// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  ListWrapper,
  SummaryWrapper,
  Wrapper,
} from "./Dashboard.elements";

// Import: Components
import { PatientList, PatientSummary } from "../../components";

// Page: Dashboard
export default function Dashboard() {
  return (
    <>
      <Container data-testid={"dashboard"}>
        <Wrapper>
          <ListWrapper>
            <PatientList />
          </ListWrapper>

          <SummaryWrapper>
            <PatientSummary />
          </SummaryWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
