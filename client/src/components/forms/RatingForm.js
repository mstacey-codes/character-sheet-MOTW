import React from "react";
import RatingTile from "./RatingTile";

const RatingForm = (props) => {
  const ratingTiles = props.ratings.map((rating, index) => {
    return (
      <RatingTile
        key={index + "rating"}
        id={index + "rating"}
        rating={rating}
        handleInputChangeRating={props.handleInputChangeRating}
        isChecked={JSON.stringify(rating) === JSON.stringify(props.ratingState)}
      />
    );
  });

  return (
    <div className="ratings-block">
      <h5>What stats best fit your character?</h5>
      <ul className="no-bullets">{ratingTiles}</ul>
    </div>
  );
};

export default RatingForm;
