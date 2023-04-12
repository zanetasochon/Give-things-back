import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AppRoutes } from "./AppRoutes";
import { useAppDispatch } from "./store/hooks";
import {
  checkIfUserExistsInLocalStorage,
  getUserFromLocalStorage,
} from "./utils/user.utils";
import { getUser } from "./store/slices/userSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getData = () => {
    const bool = checkIfUserExistsInLocalStorage();
    if (!bool) {
      navigate("/signin");
    } else {
      const user = getUserFromLocalStorage();
      dispatch(getUser({ id: user?.id!, email: user?.email! }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <AppRoutes />;
};

export default App;
