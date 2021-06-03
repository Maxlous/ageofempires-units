import { screen, render, waitFor } from "../test-utils";
import userEvent from "@testing-library/user-event";
import Costs from "../components/Costs";

describe("costs component renders", () => {
  test("should display checkboxes unchecked at first", () => {
    render(<Costs />);
    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.map((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
  });

  test("should display range inputs disabled at first", () => {
    render(<Costs />);
    const rangeInputs = screen.getAllByRole("slider");
    rangeInputs.map((rangeInput) => {
      expect(rangeInput).toBeDisabled();
    });
  });

  test("should enable range input when relevant checkbox is checked", async () => {
    render(<Costs />);
    const woodCheckbox = screen.getByRole("checkbox", { name: "Wood" });
    const woodRange = screen.getByTestId("wood-slider");
    userEvent.click(woodCheckbox);
    await waitFor(() => expect(woodRange).toBeEnabled());
  });

  test("should disable range input when relevant checkbox is unchecked", async () => {
    render(<Costs />);
    const foodCheckbox = screen.getByRole("checkbox", { name: "Food" });
    const foodRange = screen.getByTestId("food-slider");
    userEvent.click(foodCheckbox);
    await waitFor(() => expect(foodRange).toBeEnabled());
    userEvent.click(foodCheckbox);
    await waitFor(() => expect(foodRange).toBeDisabled());
  });
});
