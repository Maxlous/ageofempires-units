import { screen, render } from "../test-utils";
import TableItem from "../components/UnitTable";

test("should display table", () => {
  render(<TableItem />);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});
