import { render, screen } from "../test-utils";
import Units from "../pages/Units";
import data from "../data.json";
test("should render all the data coming from initial state", () => {
  render(<Units />);
  const lastItemInTheTable = screen.getByText(data.units.length.toString());
  expect(lastItemInTheTable).toBeInTheDocument();
});
