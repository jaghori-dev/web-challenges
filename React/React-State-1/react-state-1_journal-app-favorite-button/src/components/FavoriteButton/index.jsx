import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setisFavorite] = useState(false);
  function handleFavorite() {
    setisFavorite(prev => !prev);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
