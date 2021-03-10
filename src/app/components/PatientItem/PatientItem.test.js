// Import: Packages
import { render } from "@testing-library/react";

// Import: Component
import PatientItem from "./PatientItem.component";

// Test: Checks that PatientItem renders
it("checkPatientItemRender", () => {
  const { queryByTestId } = render(<PatientItem />);
  const component = queryByTestId("patientItem");
  expect(component).toBeTruthy();
});
