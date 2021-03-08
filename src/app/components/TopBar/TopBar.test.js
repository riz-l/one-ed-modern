// Import: Packages
import { render } from "@testing-library/react";

// Import: Components
import TopBar from "./TopBar.component";

// Test: Checks that TopBar renders
it("checkTopBarRender", () => {
  const { queryByTestId } = render(<TopBar />);
  const page = queryByTestId("topbar");
  expect(page).toBeTruthy();
});
