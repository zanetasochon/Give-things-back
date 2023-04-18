import { DashboardContactForm } from "../../components/Contact/DashboardContactForm";
import pullover from "../../assets/Header-Form-Background.png";
import decoration from "../../assets/Decoration.png";
import { DashboardFooter } from "../../components/Footer/DashboardFooter";
import { GiveThingsForm } from "../../components/GiveThingsForm/GiveThingsForm";

export const DonateThings = () => {
  return (
    <section>
      <div className="container__donate--things">
        <div className="container__background">
          <img
            className="pullover__background"
            src={pullover}
            alt="pullover-background"
          />
        </div>
        <div className="header__section--container">
          <h2 className="header__text">
            Give away things you no longer need to those in NEED
          </h2>
          <div className="decor__container">
            <img src={decoration} alt="decoration" />
          </div>
          <h3 className="description__header">Simple 4 steps are enough:</h3>
          <div className="boxes__wrapper">
            <div className="box__step">
              <div className="number__step">1</div>
              <div className="step">Choose things</div>
            </div>
            <div className="box__step">
              <div className="number__step">2</div>
              <div className="step">Put them in a bag</div>
            </div>
            <div className="box__step">
              <div className="number__step">3</div>
              <div className="step">Choose foundation</div>
            </div>
            <div className="box__step">
              <div className="number__step">4</div>
              <div className="step">Order a courier</div>
            </div>
          </div>
        </div>
      </div>
      <div className="important__info">
        <h3 className="important__header">Important!</h3>
        <p className="important__text">
          Fill in the details of your belongings. Thanks to this, we will know
          to whom it is best to give them.
        </p>
      </div>
      <div>
        <GiveThingsForm />
      </div>
      <DashboardContactForm />
      <DashboardFooter />
    </section>
  );
};
