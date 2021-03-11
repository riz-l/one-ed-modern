// Import: Packages
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Page
import UserApp from "./UserApp.component";

// Test: Checks that UserApp renders
it("checkUserAppRender", () => {
  const { queryByTestId } = render(
    <Router>
      <UserApp />
    </Router>
  );
  const page = queryByTestId("userApp");
  expect(page).toBeTruthy();
});
