// Import: Packages
import { render } from "@testing-library/react";

// Import: Component
import PatientSummary from "./PatientSummary.component";

// Test: Checks that PatientSummary renders
it("checkPatientSummaryRender", () => {
  const { queryByTestId } = render(<PatientSummary />);
  const component = queryByTestId("patientSummary");
  expect(component).toBeTruthy();
});
