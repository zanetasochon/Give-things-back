import { useRoutes } from "react-router-dom";
import { DashboardThreeColumns } from "./components/ThreeColumns/DashboardThreeColumns";
import { DashboardFourSteps } from "./components/FourSteps/DashboardFourSteps";
import { DashboardAboutUs } from "./components/AboutUs/DashboardAboutUs";
import { DashboardWhatWeHelp } from "./components/WhatWeHelp/DashboardWhatWeHelp";
import { DashboardContactForm } from "./components/Contact/DashboardContactForm";
import { DashboardFooter } from "./components/Footer /DashboardFooter";
import { DashboardStart } from "./components/Start/DashboardStart";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { Signin } from "./views/Signin/Signin";
import { Signup } from "./views/Signup/Signup";
import { Logout } from "./views/Logout/Logout";
import { DonateThings } from "./views/DonateThings/DonateThings";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "start",
          element: <DashboardStart />,
        },
        {
          path: "threeColumns",
          element: <DashboardThreeColumns />,
        },
        {
          path: "fourSteps",
          element: <DashboardFourSteps />,
        },
        {
          path: "aboutUs",
          element: <DashboardAboutUs />,
        },
        {
          path: "weHelp",
          element: <DashboardWhatWeHelp />,
        },
        {
          path: "contact",
          element: <DashboardContactForm />,
        },
        {
          path: "footer",
          element: <DashboardFooter />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/donateThings",
      element: <DonateThings />,
    },
  ]);
  return routes;
};
