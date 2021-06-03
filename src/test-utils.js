import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
