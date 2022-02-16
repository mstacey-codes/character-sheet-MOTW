import React from "react";
import RatingTile from "./RatingTile";

const RatingForm = (props) => {
  console.log(props);

  const ratingTiles = props.ratings.map((rating, index) => {
    return (
      <RatingTile
        key={index + "rating"}
        id={index + "rating"}
        rating={rating}
        handleInputChangeRating={props.handleInputChangeRating}
      />
    );
  });

  return (
    <>
      What stats best fit your character?
      <ul>{ratingTiles}</ul>
    </>
  );
};

export default RatingForm;
