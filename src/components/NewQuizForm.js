import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTopics } from "../features/topics/topicsSlice";
import { addQuiz } from "../features/quizzes/quizzesSlice";
import { addCards } from "../features/cards/cardsSlice";

export default function NewQuizForm() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [topicId, setTopicId] = useState("");
  const history = useHistory();
  const topics = useSelector(selectAllTopics);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    if (topicId === "") {
      alert("Select a topic that you have created before proceeding!");
      return;
    }
    if (cards.length === 0) {
      alert("Add at least one flashcard to your quiz before proceeding!");
      return;
    }
    const cardIds = [];

    let uniqueCardId = 0;
    cards.forEach((card, index) => {
      uniqueCardId = uuidv4();
      cardIds.push(uniqueCardId);
      dispatch(
        addCards({
          id: uniqueCardId,
          front: document.getElementById(`card-front-${index}`).value,
          back: document.getElementById(`card-back-${index}`).value,
        })
      );
    });

    dispatch(
      addQuiz({
        id: uuidv4(),
        name: document.getElementById("quiz-name").value,
        topicId: document.getElementById("quiz-topic").value,
        cardIds: cardIds,
      })
    );

    history.push(ROUTES.quizzesRoute());
  };

  const addCardInputs = (e) => {
    e.preventDefault();
    setCards(cards.concat({ front: "", back: "" }));
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  };

  const updateCardState = (index, side, value) => {
    const newCards = cards.slice();
    newCards[index][side] = value;
    setCards(newCards);
  };

  return (
    <section>
      <h1>Create a new quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="quiz-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Quiz Title"
        />
        <select
          id="quiz-topic"
          onChange={(e) => setTopicId(e.currentTarget.value)}
          placeholder="Topic"
        >
          <option value="">Topic</option>
          {Object.values(topics).map((topic) => (
            <option key={topic.data.id} value={topic.data.id}>
              {topic.data.name}
            </option>
          ))}
        </select>
        {cards.map((card, index) => (
          <div key={index} className="card-front-back">
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, "front", e.currentTarget.value)
              }
              placeholder="Front"
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, "back", e.currentTarget.value)
              }
              placeholder="Back"
            />

            <button
              onClick={(e) => removeCard(e, index)}
              className="remove-card-button"
            >
              Remove Card
            </button>
          </div>
        ))}
        <div className="actions-container">
          <button onClick={addCardInputs}>Add a Card</button>
          <button>Create Quiz</button>
        </div>
      </form>
    </section>
  );
}
