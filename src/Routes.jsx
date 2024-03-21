import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPage from "pages/Landing";
import Menu from "pages/Menu";
import Contactus from "pages/Contactus";
import AboutPage from "pages/About";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LandingPage /> },
    {
      path: "landing-page",
      element: <LandingPage />,
    },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "contact-us",
      element: <Contactus />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
