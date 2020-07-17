import React from "react";
import house1 from "../../../assets/img/large/house-1.jpeg";
import house2 from "../../../assets/img/large/house-2.jpeg";
import logo from "../../../assets/img/logo.png";

const Template = () => {
  return (
    <div class="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      <div className="realtors__list">
        <img src={house1} alt="" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
          <p className="realtors__sold">55555 sold</p>
        </div>

        <img src={house2} alt="" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
          <p className="realtors__sold">55555 sold</p>
        </div>

        <img src={logo} alt="" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
          <p className="realtors__sold">55555 sold</p>
        </div>
      </div>
    </div>
  );
};

export default Template;
