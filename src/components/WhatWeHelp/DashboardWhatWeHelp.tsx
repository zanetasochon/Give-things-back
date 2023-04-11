import * as Scroll from "react-scroll";
import { useState } from "react";
import decoration from "../../assets/Decoration.png";

interface IObject {
  name: string;
  goal: string;
  needs: string;
}

export const DashboardWhatWeHelp = () => {
  const { Element } = Scroll;
  const [category, setCategory] = useState("foundations"); // foundations || nonGovOrgs || localFundrisers
  const [arrayToRender, setArrayToRender] = useState<IObject[]>([]);

  const data = {
    foundations: [
      {
        name: "Foundation `Health care`",
        goal: "Goal and mission: Helping people who are in a difficult life situation",
        needs: "clothes, food, household appliances, furniture, toys",
      },
      {
        name: "Foundation `For children`",
        goal: " Goal and mission: Helping children from poor families",
        needs: "clothes, furniture, toys",
      },
      {
        name: "Foundation `Without a home`",
        goal: " Goal and mission: Help for people without a place of residence",
        needs: "clothes, food, warm blankets",
      },
      {
        name: "Foundation `Education for All Foundation`",
        goal: "Goal and mission: Helping children and youth acquire education",
        needs: "school supplies, educational materials, scholarships,",
      },
      {
        name: "Housing Assistance`",
        goal: "Providing affordable housing for low-income families and individuals",
        needs:
          "donations, volunteers, financial support, donations for household items",
      },
      {
        name: "Foundation `Disaster Relief`",
        goal: "Providing assistance to communities affected by natural disasters",
        needs:
          "donations, volunteers, financial support, donations for temporary housing",
      },
      {
        name: "Foundation `Animal Rescue`",
        goal: "Rescuing and rehabilitating abandoned and abused animals",
        needs:
          "food and supplies, volunteers for animal care,veterinary care,building animal shelters",
      },
      {
        name: "Foundation `Environmental Conservation`",
        goal: "Protecting the environment and preserving natural resources",
        needs:
          "conservation projects,environmental clean-up,research and education,tree planting",
      },
      {
        name: "Foundation `Youth Empowerment`",
        goal: "Empowering young people to become leaders and achieve their goals",
        needs:
          "youth programs,youth scholarships, youth events,youth leadership training",
      },
    ],
    nonGovOrgs: [
      {
        name: "Association for Homeless Assistance",
        goal: "Providing assistance and support for homeless individuals",
        needs:
          "shelters, food and clothing,support services,employment training and education programs.",
      },
      {
        name: "Human Rights Watch",
        goal: "Promoting and protecting human rights worldwide",
        needs:
          "human rights advocacy,research and investigations,legal aid and representation.",
      },
      {
        name: "International Red Cross",
        goal: "Providing humanitarian assistance to those in crisis, war, and disasters",
        needs:
          "emergency supplies,disaster response and relief efforts,healthcare services.",
      },
      {
        name: "Amnesty International",
        goal: "Advocating for human rights and social justice globally",
        needs:
          "advocacy and campaigns,research and investigations, financial legal aid and representation.",
      },
      {
        name: "Doctors Without Borders",
        goal: "Providing medical assistance to those in crisis and conflict zones",
        needs:
          "medical supplies,healthcare services,emergency response efforts.",
      },
      {
        name: "United Nations Children's Fund (UNICEF)",
        goal: "Improving the lives of children and their families worldwide",
        needs:
          "education and healthcare programs,outreach and support services,emergency response efforts.",
      },
    ],
    localFundrisers: [
      {
        name: "Community Food Drive",
        goal: "Collecting food donations for families in need within the local community",
        needs:
          "collect and sort food donations, donations of non-perishable food items,purchasing perishable food items.",
      },
      {
        name: "Back-to-School Supplies Drive",
        goal: "Providing school supplies to low-income families within the local community",
        needs:
          "school supplies such as notebooks, pencils, and backpacks,distribute supplies,purchasing supplies.",
      },
      {
        name: "Holiday Toy Drive",
        goal: "Collecting new toys and gifts for children from low-income families within the local community during the holiday season",
        needs:
          "new, unwrapped toys and gifts,sort and distribute donations,purchasing toys and gifts.",
      },
    ],
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (category === "foundations") {
      setArrayToRender([
        data.foundations[+e.currentTarget.id],
        data.foundations[+e.currentTarget.id + 1],
        data.foundations[+e.currentTarget.id + 2],
      ]);
    } else if (category === "nonGovOrgs") {
      setArrayToRender([
        data.nonGovOrgs[+e.currentTarget.id],
        data.nonGovOrgs[+e.currentTarget.id + 1],
        data.nonGovOrgs[+e.currentTarget.id + 2],
      ]);
    } else if (category === "localFundrisers") {
      setArrayToRender([
        data.localFundrisers[+e.currentTarget.id],
        data.localFundrisers[+e.currentTarget.id + 1],
        data.localFundrisers[+e.currentTarget.id + 2],
      ]);
    }
  };

  // const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // const id = +e.currentTarget.id
  // if(category === "foundations") setArray(data.foundations, id)
  // }

  // const setArray = (data, e) => {
  //   setArrayToRender([
  //     data[e],
  //     data[e + 1],
  //     data[e + 2]
  //   ])
  // }

  return (
    <section className="whatWeHelp__container">
      <Element name="whatWeHelp" />
      <h3 className="whoWeHelp__header">Who We Help</h3>
      <img className="decoration" src={decoration} alt="decoration" />
      <div className="buttons__help">
        <button
          type="button"
          className="whoWeHelp__button"
          onClick={() => {
            setArrayToRender([
              data.foundations[0],
              data.foundations[1],
              data.foundations[2],
            ]);
            setCategory("foundations");
          }}
        >
          Foundations
        </button>
        <button
          type="button"
          className="whoWeHelp__button"
          onClick={() => {
            setArrayToRender([
              data.nonGovOrgs[0],
              data.nonGovOrgs[1],
              data.nonGovOrgs[2],
            ]);
            setCategory("nonGovOrgs");
          }}
        >
          Non-governmental <br /> organizations
        </button>
        <button
          type="button"
          className="whoWeHelp__button"
          onClick={() => {
            setArrayToRender([
              data.localFundrisers[0],
              data.localFundrisers[1],
              data.localFundrisers[2],
            ]);
            setCategory("localFundrisers");
          }}
        >
          Local <br /> fundraisers
        </button>
      </div>
      <p className="description__text">
        In our database, you will find a list of verified Foundations that we
        cooperate with. You can check what they do, whom they help, and what
        they need.
      </p>
      {arrayToRender.map((element, idx) => {
        return (
          <div
            key={crypto.randomUUID()}
            className={`fundation ${idx === 1 && "middle__section"}`}
          >
            <div className="name__of--foundation">{element.name}</div>
            <p className="goal">{element.goal}</p>
            <p className="need__stuff">{element.needs}</p>
          </div>
        );
      })}
      <div className="buttons__pages">
        {category !== "localFundrisers" ? (
          <>
            <button
              type="button"
              className="page__button"
              id="0"
              onClick={onClick}
            >
              1
            </button>
            <button
              type="button"
              className="page__button"
              id="3"
              onClick={onClick}
            >
              2
            </button>
            {category !== "nonGovOrgs" ? (
              <button
                type="button"
                className="page__button"
                id="6"
                onClick={onClick}
              >
                3
              </button>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
};
