import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../store/slices/userSlice";

// export const useProtectedRoutes = () => {
//   const user = useSelector(selectUser);
//   const navigate = useNavigate();

//   const navigateIfNoUser = () => {
//     if (!user) navigate("/signup");
//   };

//   return { navigateIfNoUser };
// };

export const useRoutesIfNoLog = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const navigateIfNoLog = () => {
    if (user.id.length) {
      navigate("/donateThings");
    } else {
      navigate("/signup");
    }
  };

  return { navigateIfNoLog };
};
