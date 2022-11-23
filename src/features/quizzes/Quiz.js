import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { selectAllQuizzes } from "./quizzesSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Topic() {
  const quizzes = useSelector(selectAllQuizzes);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const changeFlashcard = (e) => {
    if (e.target.id === "prev") {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <section>
      <h1>{quiz.name} FlashCards</h1>
      <div id="flashcards">
        <button
          id="prev"
          disabled={currentCardIndex === 0}
          onClick={changeFlashcard}
        >
          &lt;
        </button>
        <div className="cards-list">
          <Card
            key={quiz.cardIds[currentCardIndex]}
            id={quiz.cardIds[currentCardIndex]}
          />
        </div>
        <button
          id="next"
          disabled={currentCardIndex === quiz.cardIds.length - 1}
          onClick={changeFlashcard}
        >
          &gt;
        </button>
      </div>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        {currentCardIndex + 1}/{quiz.cardIds.length}
      </p>
      <Link
        to={ROUTES.newQuizRoute()}
        className="button create-new-topic-button"
      >
        Create a New Quiz
      </Link>
    </section>
  );
}
