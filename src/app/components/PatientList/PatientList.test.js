// Import: Packages
import { render } from "@testing-library/react";

// Import: Components
import PatientList from "./PatientList.component";

// Test: Checks that PatientList renders
it("checkPatientListRender", () => {
  const { queryByTestId } = render(<PatientList />);
  const page = queryByTestId("patientList");
  expect(page).toBeTruthy();
});
