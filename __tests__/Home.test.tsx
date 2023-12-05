import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

const { expect } = require("@jest/globals");

it("Should Render Home Component and 'Hello' text in it", () => {
  // AAA Method of Unit Testing
  render(<Home />); // Arrange ( Arrange or Call the Component u wanna test )

  const learnText = screen.getByText("Hello"); // Act ( Get or Click whatever behaviour u want it to do )
  expect(learnText).toBeInTheDocument(); // Assert ( Assert what u r expecting the function to do )
});
