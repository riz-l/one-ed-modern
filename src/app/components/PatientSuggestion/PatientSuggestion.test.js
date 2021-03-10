// Import: Packages
import { render } from "@testing-library/react";

// Import: Component
import PatientSuggestion from "./PatientSuggestion.component";

// Test: Checks that PatientSuggestion renders
it("checkPatientSuggestionRender", () => {
  const { queryByTestId } = render(<PatientSuggestion />);
  const component = queryByTestId("patientSuggestion");
  expect(component).toBeTruthy();
});
