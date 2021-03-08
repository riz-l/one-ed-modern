// Import: Packages
import { render } from "@testing-library/react";

// Import: Components
import PatientSummary from "./PatientSummary.component";

// Test: Checks that PatientSummary renders
it("checkPatientSummaryRender", () => {
  const { queryByTestId } = render(<PatientSummary />);
  const page = queryByTestId("patientSummary");
  expect(page).toBeTruthy();
});
