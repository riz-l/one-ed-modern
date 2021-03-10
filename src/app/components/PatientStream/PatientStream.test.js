// Import: Packages
import { render } from "@testing-library/react";

// Import: Component
import PatientStream from "./PatientStream.component";

// Test: Checks that PatientStream renders
it("checkPatientStreamRender", () => {
  const { queryByTestId } = render(<PatientStream />);
  const component = queryByTestId("patientStream");
  expect(component).toBeTruthy();
});
