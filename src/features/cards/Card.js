import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCards } from "./cardsSlice";

export default function Card({ id }) {
  const cards = useSelector(selectAllCards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      {!flipped && (
        <button className="card" onClick={(e) => setFlipped(!flipped)}>
          {card.front}
        </button>
      )}
      {flipped && (
        <button className="card-flipped" onClick={(e) => setFlipped(!flipped)}>
          {card.back}
        </button>
      )}
    </li>
  );
}
