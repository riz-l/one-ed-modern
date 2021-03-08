// Import: Packages
import { render } from "@testing-library/react";

// Import: Pages
import Dashboard from "./Dashboard.component";

// Test: Checks that Dashboard renders
it("checkDashboardRender", () => {
  const { queryByTestId } = render(<Dashboard />);
  const page = queryByTestId("dashboard");
  expect(page).toBeTruthy();
});
