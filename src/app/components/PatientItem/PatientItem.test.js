// Import: Packages
import { render } from "@testing-library/react";

// Import: Components
import PatientItem from "./PatientItem.component";

// Test: Checks that PatientItem renders
it("checkPatientItemRender", () => {
  const { queryByTestId } = render(<PatientItem />);
  const page = queryByTestId("patientItem");
  expect(page).toBeTruthy();
});
