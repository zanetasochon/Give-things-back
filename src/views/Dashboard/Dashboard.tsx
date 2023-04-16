import { Outlet } from "react-router-dom";
import { DashboardThreeColumns } from "../../components/ThreeColumns/DashboardThreeColumns";
import { DashboardFourSteps } from "../../components/FourSteps/DashboardFourSteps";
import { DashboardAboutUs } from "../../components/AboutUs/DashboardAboutUs";
import { DashboardWhatWeHelp } from "../../components/WhatWeHelp/DashboardWhatWeHelp";
import { DashboardContactForm } from "../../components/Contact/DashboardContactForm";
import { DashboardFooter } from "../../components/Footer/DashboardFooter";
import { DashboardStart } from "../../components/Start/DashboardStart";

export const Dashboard = () => {
  return (
    <div>
      <Outlet />
      <DashboardStart />
      <DashboardThreeColumns />
      <DashboardFourSteps />
      <DashboardAboutUs />
      <DashboardWhatWeHelp />
      <div>
        <DashboardContactForm />
        <DashboardFooter />
      </div>
    </div>
  );
};
