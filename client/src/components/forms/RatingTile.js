import React from "react";

const RatingTile = ({ rating, id, handleInputChangeRating }) => {
  const ratingFormatted = `Charm: ${rating.charm} | Cool: ${rating.cool} | Sharp: ${rating.sharp} | Tough: ${rating.tough} | Weird: ${rating.weird}`;
  return (
    <li id={id}>
      <label htmlFor={`${rating}`} />
      <input
        type="radio"
        name="rating"
        value={JSON.stringify(rating)}
        onChange={handleInputChangeRating}
      />
      {ratingFormatted}
    </li>
  );
};
export default RatingTile;
