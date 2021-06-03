import Home from "../pages/Home";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../test-utils";

describe("Home Page Tests", () => {
  test("should render title", () => {
    render(<Home />);
    const title = screen.getByText(/welcome to age of empires units/i);
    expect(title).toBeInTheDocument();
  });

  test("should render link", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: "Let's checkout them!" });
    expect(link).toBeInTheDocument();
  });

  test("should have homepage class to display image", () => {
    render(<Home />);
    const background = screen.getByRole("article");
    expect(background).toHaveClass("homepage");
  });

  test("should redirect to units page when link clicked", () => {
    render(<App />);
    const link = screen.getByRole("link", { name: /let's checkout them!/i });
    userEvent.click(link);
    expect(screen.getByText(/ages/i)).toBeInTheDocument();
  });
});
