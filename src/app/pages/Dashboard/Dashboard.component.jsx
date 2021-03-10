// Import: Packages
import React from "react";

// Import: Elements
import {
  Container,
  Layout,
  ListContainer,
  SummaryBottom,
  SummaryContainer,
  StreamContainer,
  SuggestionContainer,
  WorkflowContainer,
  WorkflowWrapper,
} from "./Dashboard.elements";

// Import: Components
import {
  Header,
  Navigation,
  PatientList,
  PatientStream,
  PatientSuggestion,
  PatientSummary,
} from "../../components";

// Page: Dashboard
export default function Dashboard() {
  return (
    <>
      <Container data-testid={"dashboard"}>
        <Header />

        <Layout>
          <Navigation />

          <ListContainer>
            <PatientList />
          </ListContainer>

          <WorkflowContainer>
            <WorkflowWrapper>
              <SummaryContainer>
                <PatientSummary />
              </SummaryContainer>

              <SummaryBottom>
                <StreamContainer>
                  <PatientStream />
                </StreamContainer>

                <SuggestionContainer>
                  <PatientSuggestion />
                </SuggestionContainer>
              </SummaryBottom>
            </WorkflowWrapper>
          </WorkflowContainer>
        </Layout>
      </Container>
    </>
  );
}
