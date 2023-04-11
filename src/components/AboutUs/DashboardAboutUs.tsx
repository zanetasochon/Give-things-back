import * as Scroll from "react-scroll";
import decoration from "../../assets/Decoration.png";
import signature from "../../assets/Signature.svg";
import people from "../../assets/People.png";

export const DashboardAboutUs = () => {
  const { Element } = Scroll;
  return (
    <section className="container__aboutUs">
      <Element name="elementAboutUs" />
      <div className="aboutUs__text">
        <h3 className="header__aboutUs">About Us</h3>
        <img className="decor" src={decoration} alt="decoration" />
        <p className="description__aboutUs">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <div className="signature__container">
          <img className="signature" src={signature} alt="signature" />
        </div>
      </div>
      <div className="people__photo--container">
        <img
          className="people__photo"
          src={people}
          alt="international people img"
        />
      </div>
    </section>
  );
};
