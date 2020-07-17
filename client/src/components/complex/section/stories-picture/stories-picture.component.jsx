import React from "react";
import story1 from '../../../../assets/img/large/story-1.jpeg';
import story2 from '../../../../assets/img/large/story-2.jpeg';

const Template = () => {
  return (
    <div className="story__pictures">
      <img src={story1} alt="new house" className="story__img--1" />
      <img src={story2} alt="new house" className="story__img--2" />
    </div>
  );
};

export default Template;
