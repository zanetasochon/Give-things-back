import * as Scroll from "react-scroll";
import decoration from "../../assets/Decoration.png";
import pullover from "../../assets/Icon-tshirtaqz.png";
import arrow from "../../assets/Icon-arrow.png";
import glass from "../../assets/Icon-glass.png";
import loop from "../../assets/Icon-loop.png";
import { useRoutesIfNoLog } from "../../hooks/hooks";

export const DashboardFourSteps = () => {
  const { Element } = Scroll;
  const { navigateIfNoLog } = useRoutesIfNoLog();

  return (
    <section className="container__four--steps">
      <Element name="elementFourSteps" />
      <div className="header__text--section">
        <h1 className="title__four--steps">Just 4 simple steps</h1>
        <img className="decoration" src={decoration} alt="decoration" />
      </div>
      <div className="instructions__container--section">
        <div className="instructions__container">
          <img className="img" src={pullover} alt="pulloverImg" />
          <p className="instruction">Choose things</p>
          <p className="things__to--give">clothes, toys, equipment and more</p>
        </div>
        <div className="instructions__container">
          <img className="img" src={arrow} alt="arrowImg" />
          <p className="instruction">Choose things</p>
          <p className="things__to--give">clothes, toys, equipment and more</p>
        </div>
        <div className="instructions__container">
          <img className="img" src={glass} alt="magnifyingGlass" />
          <p className="instruction">Choose things</p>
          <p className="things__to--give">clothes, toys, equipment and more</p>
        </div>
        <div className="instructions__container">
          <img className="img" src={loop} alt="arrowsLoop" />
          <p className="instruction">Choose things</p>
          <p className="things__to--give">clothes, toys, equipment and more</p>
        </div>
      </div>
      <div className="container__button">
        <button
          onClick={navigateIfNoLog}
          className="button__give--things"
          type="button"
        >
          GIVE THINGS <br /> BACK
        </button>
      </div>
    </section>
  );
};
