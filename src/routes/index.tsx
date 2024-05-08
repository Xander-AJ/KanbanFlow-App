import { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/Boards";
import Home from "../pages/home";
import Projects from "../pages/projects";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", // Updated path for Home component
        element: <Home />,
      },
      {
        path: "/projects", // Updated path for Projects component
        element: <Projects />,
      },
      {
        path: "/boards", // Updated path for Boards component
        element: <Boards />,
      },
    ],
  },
];

export default routes;
