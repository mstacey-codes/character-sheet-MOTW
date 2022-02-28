import React from "react";

const RatingTile = ({ rating, id, handleInputChangeRating, isChecked }) => {
  const ratingFormatted = `Charm: ${rating.charm} | Cool: ${rating.cool} | Sharp: ${rating.sharp} | Tough: ${rating.tough} | Weird: ${rating.weird}`;
  return (
    <li className="rating-tile" id={id}>
      <label>
        <input
          type="radio"
          name="rating"
          value={JSON.stringify(rating)}
          onChange={handleInputChangeRating}
          checked={isChecked}
        />{" "}
        {ratingFormatted}
      </label>
    </li>
  );
};
export default RatingTile;
