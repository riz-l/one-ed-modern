// Import: Packages
import { render } from "@testing-library/react";

// Import: Components
import Navigation from "./Navigation.component";

// Test: Checks that Navigation renders
it("checkNavigationRender", () => {
  const { queryByTestId } = render(<Navigation />);
  const page = queryByTestId("navigation");
  expect(page).toBeTruthy();
});
