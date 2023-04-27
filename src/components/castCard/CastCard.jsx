import React from "react";
import "./castCard.scss";
const CastCard = ({ src, name, know, width, pad }) => {
  return (
    <div style={{ margin: pad, width: width }} className="cast-card">
      <div className="cast-card__image">
        <img style={{ width: width }} src={src} alt={name} />
      </div>
      <div className="cast-card__name">
        <h3>{name}</h3>
      </div>
      <div className="cast-card__character">
        <p>{know}</p>
      </div>
    </div>
  );
};

export default CastCard;
