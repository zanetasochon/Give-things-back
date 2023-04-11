import backgroundThreeColumns from "../../assets/3 Columns Background.png";

export const DashboardThreeColumns = () => {
  return (
    <section className="container__three--columns">
      <img
        className="background"
        src={backgroundThreeColumns}
        alt="yellowBackground"
      />
      <div className="container__column">
        <h1 className="head__number">10</h1>
        <h2 className="head__text--column">DONATED BAGS</h2>
        <p className="info__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className="container__column">
        <h1 className="head__number">5</h1>
        <h2 className="head__text--column">SUPPORTED ORGANIZATIONS</h2>
        <p className="info__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className="container__column">
        <h1 className="head__number">7</h1>
        <h2 className="head__text--column">ORGANIZED COLLECTIONS</h2>
        <p className="info__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
    </section>
  );
};
