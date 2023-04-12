import { useNavigate } from "react-router-dom";
import decoration from "../../assets/Decoration.png";

export const Logout = () => {
  const navigate = useNavigate();

  const handleClickToHomePage = () => {
    navigate("/");
  };
  return (
    <div
      className="container__logout--page
    "
    >
      <h1 className="logout__info">Logout completed successfully! ✅</h1>
      <div className="decoration__hero">
        <img className="decoration__hero" src={decoration} alt="decoration" />
      </div>
      <button
        onClick={handleClickToHomePage}
        type="button"
        className="home__button"
      >
        Home Page
      </button>
    </div>
  );
};
