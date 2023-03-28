import { useRoutes } from "react-router-dom";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { Signin } from "./views/Signin/Signin";
import { Signup } from "./views/Signup/Signup";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ]);
  return routes;
};

export default App;
