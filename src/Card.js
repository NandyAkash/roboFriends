import React from "react";
import "./card.css";
const Card = ({ id, name, email }) => {
  return (
    <div className='bg-light-green dib br3 pad3 ma2 grow'>
      <img src={`https://robohash.org/${id}?200*200`} alt='friends' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
