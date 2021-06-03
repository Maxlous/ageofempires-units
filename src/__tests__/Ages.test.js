import { screen, render } from "../test-utils";
import Ages from "../components/Ages";
import userEvent from "@testing-library/user-event";

describe("Ages component renders", () => {
  test("should display the 'All' button disabled, where 'Feudal' button not disabled at first", () => {
    render(<Ages />);
    const theAllButton = screen.getByRole("button", { name: "All" });
    const theFeudalButton = screen.getByRole("button", { name: "Feudal" });
    expect(theAllButton).toBeDisabled();
    expect(theFeudalButton).toBeEnabled();
  });

  test("button should be disabled when clicked, and if user clicks another button should be enabled again", () => {
    render(<Ages />);
    const theImperialButton = screen.getByRole("button", { name: "Imperial" });
    expect(theImperialButton).toBeEnabled();
    userEvent.click(theImperialButton);
    expect(theImperialButton).toBeDisabled();
    const theDarkButton = screen.getByRole("button", { name: "Dark" });
    userEvent.click(theDarkButton);
    expect(theImperialButton).toBeEnabled();
  });
});
