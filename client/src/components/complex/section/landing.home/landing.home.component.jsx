import React from "react";
import house1 from '../../../../assets/img/large/house-1.jpeg';
import house2 from '../../../../assets/img/large/house-2.jpeg';
import house3 from '../../../../assets/img/large/house-3.jpeg';
import house4 from '../../../../assets/img/large/house-4.jpeg';
import house5 from '../../../../assets/img/large/house-5.jpeg';
import house6 from '../../../../assets/img/large/house-6.jpeg';
import sprite from "../../../../assets/spriteSVG/sprite-medals.svg";

const Template = () => {
  return (
    <section className="homes">
      <div className="home">
        <img src={house1} alt="family house" className="home__img" />
        <svg className="home__like">
          <use href={sprite + "#icon-heart-full"} />
        </svg>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location u-margin-top-small ">
          <svg>
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms u-margin-top-small ">
          <svg>
            <use href={sprite + "#icon-profile-male"} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use href={sprite + "#icon-expand"} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use href={sprite + "#icon-key"} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact us</button>
      </div>

      <div className="home">
        <img src={house2} alt="family house" className="home__img" />
        <svg className="home__like">
          <use href={sprite + "#icon-heart-full"} />
        </svg>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <svg>
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use href={sprite + "#icon-profile-male"} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use href={sprite + "#icon-expand"} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use href={sprite + "#icon-key"} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact us</button>
      </div>

      <div className="home">
        <img src={house3} alt="family house" className="home__img" />
        <svg className="home__like">
          <use href={sprite + "#icon-heart-full"} />
        </svg>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <svg>
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use href={sprite + "#icon-profile-male"} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use href={sprite + "#icon-expand"} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use href={sprite + "#icon-key"} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact us</button>
      </div>

      <div className="home">
        <img src={house4} alt="family house" className="home__img" />
        <svg className="home__like">
          <use href={sprite + "#icon-heart-full"} />
        </svg>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <svg>
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use href={sprite + "#icon-profile-male"} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use href={sprite + "#icon-expand"} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use href={sprite + "#icon-key"} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact us</button>
      </div>

      <div className="home">
        <img src={house5} alt="family house" className="home__img" />
        <svg className="home__like">
          <use href={sprite + "#icon-heart-full"} />
        </svg>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <svg>
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use href={sprite + "#icon-profile-male"} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use href={sprite + "#icon-expand"} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use href={sprite + "#icon-key"} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact us</button>
      </div>

      <div className="home">
        <img src={house6} alt="family house" className="home__img" />
        <svg className="home__like">
          <use href={sprite + "#icon-heart-full"} />
        </svg>
        <h5 className="home__name">Beautiful family house</h5>
        <div className="home__location">
          <svg>
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use href={sprite + "#icon-profile-male"} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use href={sprite + "#icon-expand"} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use href={sprite + "#icon-key"} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact us</button>
      </div>
    </section>
  );
};

export default Template;
