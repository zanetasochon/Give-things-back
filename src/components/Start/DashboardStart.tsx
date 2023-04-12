// import { useNavigate } from "react-router-dom";
import hero from "../../assets/Hero Image.png";
import decoration from "../../assets/Decoration.png";
import { useRoutesIfNoLog } from "../../hooks/hooks";

export const DashboardStart = () => {
  const { navigateIfNoLog } = useRoutesIfNoLog();
  return (
    <section className="main">
      <div className="container__hero">
        <img className="hero" src={hero} alt="stuff" />
      </div>
      <div className="text__container">
        <div className="text__wrapper">
          <h1 className="header">Start helping!</h1>
          <h1 className="header second__text--header">
            Give unwanted things into trusted hands.
          </h1>
          <div className="decoration__hero">
            <img className="decoration" src={decoration} alt="decoration" />
          </div>
          <div className="buttons">
            <button
              onClick={navigateIfNoLog}
              type="button"
              className="button give__things"
            >
              GIVE THINGS BACK
            </button>
            <button type="button" className="button organize__collection">
              ORGANIZE A COLLECTION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
