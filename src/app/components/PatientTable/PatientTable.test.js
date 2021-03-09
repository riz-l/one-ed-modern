// Import: Packages
import { render } from "@testing-library/react";

// Import: Components
import PatientTable from "./PatientTable.component";

// Test: Checks that PatientTable renders
it("checkPatientTableRender", () => {
  const { queryByTestId } = render(<PatientTable />);
  const page = queryByTestId("patientTable");
  expect(page).toBeTruthy();
});
