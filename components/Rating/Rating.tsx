import { useEffect, useState } from "react";
import clsx from "clsx";

import StarIcon from "./star.svg";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";

export const Rating = ({
  rating: ratingProp,
  isEditable = false,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const displayRating = (rating: number) => {
    isEditable && constructRatingArray(rating);
  };

  const changeRating = (rating: number) => {
    isEditable && setRating && setRating(rating);
  };

  const changeRatingBySpace = (keyCode: string, rating: number) => {
    isEditable && setRating && keyCode === "Space" && setRating(rating);
  };

  const constructRatingArray = (rating: number) => {
    setRatingArray((currentRating) =>
      currentRating.map((_, index) => (
        <StarIcon
          className={clsx({
            [styles.filled]: index < rating,
          })}
          key={index}
          tabIndex={isEditable ? 0 : -1}
          onMouseEnter={() => displayRating(index + 1)}
          onClick={() => changeRating(index + 1)}
          onKeyDown={(evt) => changeRatingBySpace(evt.code, index + 1)}
        />
      ))
    );
  };

  useEffect(() => {
    constructRatingArray(ratingProp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ratingProp]);

  return (
    <div
      {...props}
      className={clsx(styles.stars, { [styles.editable]: isEditable })}
      onMouseLeave={() => displayRating(ratingProp)}
    >
      {ratingArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};
