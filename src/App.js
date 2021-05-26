import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./config/Router";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route path={route.path} exact={route.exact} key={index}>
            <Layout>{route.component}</Layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
