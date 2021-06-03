import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Home from "../pages/Home";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Home Page Tests", () => {
  test("should render title", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const title = screen.getByText(/welcome to age of empires units/i);
    expect(title).toBeInTheDocument();
  });

  test("should render link", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const link = screen.getByRole("link", { name: "Let's checkout them!" });
    expect(link).toBeInTheDocument();
  });

  test("should have homepage class to display image", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const background = screen.getByRole("article");
    expect(background).toHaveClass("homepage");
  });

  test("should redirect to units page when link clicked", () => {
    render(
      <Provider store={store}>
        <App />)
      </Provider>
    );
    const link = screen.getByRole("link", { name: /let's checkout them!/i });
    userEvent.click(link);
    expect(screen.getByText(/ages/i)).toBeInTheDocument();
  });
});
