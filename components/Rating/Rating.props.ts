import { HTMLAttributes } from "react";

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}
