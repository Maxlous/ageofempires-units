import Home from "../pages/Home";
import Units from "../pages/Units";
import Details from "../pages/Details";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    path: "/units",
    exact: true,
    component: <Units />,
  },
  {
    path: "/units/details/:id",
    exact: false,
    component: <Details />,
  },
];
