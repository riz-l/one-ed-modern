// Import: Packages
import { render } from "@testing-library/react";

// Import: Component
import PatientList from "./PatientList.component";

// Test: Checks that PatientList renders
it("checkPatientListRender", () => {
  const { queryByTestId } = render(<PatientList />);
  const component = queryByTestId("patientList");
  expect(component).toBeTruthy();
});
