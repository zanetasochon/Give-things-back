import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <Outlet />
      <div>Dashboard</div>;
    </div>
  );
};
