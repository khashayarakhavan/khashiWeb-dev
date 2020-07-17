import React from "react";
import sprite from "../../../../assets/spriteSVG/sprite-medals.svg";

const Template = () => {
  return (
    <section className="features">
      <div className="feature">
        <svg className="feature__icon">
          <use href={sprite + "#icon-global"} />
        </svg>
        <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={sprite + "#icon-trophy"} />
        </svg>
        <h4 className="heading-4 heading-4--dark">only the best propreties</h4>
        <p className="feature__text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={sprite + "#icon-map-pin"} />
        </svg>
        <h4 className="heading-4 heading-4--dark">
          All homes in top locations
        </h4>
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={sprite + "#icon-key"} />
        </svg>
        <h4 className="heading-4 heading-4--dark">new home in one week</h4>
        <p className="feature__text">
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={sprite + "#icon-presentation"} />
        </svg>
        <h4 className="heading-4 heading-4--dark">top realtors</h4>
        <p className="feature__text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          <use href={sprite + "#icon-lock"} />
        </svg>
        <h4 className="heading-4 heading-4--dark">secure payments on Nexter</h4>
        <p className="feature__text">
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
};

export default Template;
