// Import: Packages
import { render } from "@testing-library/react";

// Import: Pages
import Login from "./Login.component";

// Test: Checks that Login renders
it("checkLoginRender", () => {
  const { queryByTestId } = render(<Login />);
  const page = queryByTestId("login");
  expect(page).toBeTruthy();
});
