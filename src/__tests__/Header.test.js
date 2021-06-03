import { screen, render } from "../test-utils";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("should navigate to units page, then navigate back to home page", () => {
  render(<App />);
  const unitsLink = screen.getByRole("link", { name: /units/i });
  userEvent.click(unitsLink);
  expect(screen.getByText("costs")).toBeInTheDocument();
  const homeLink = screen.getByRole("link", { name: /home/i });
  userEvent.click(homeLink);
  expect(
    screen.getByText(/welcome to age of empires units/i)
  ).toBeInTheDocument();
});
