import { screen, render } from "../test-utils";
import Details from "../pages/Details";

test("should article exist and class name of details", () => {
  render(<Details />);
  const article = screen.getByRole("article");
  expect(article).toBeInTheDocument();
  expect(article).toHaveClass("details");
});

test("should render id text", () => {
  render(<Details />);
  const idElement = screen.getByText(/id/i);
  expect(idElement).toBeInTheDocument();
});
