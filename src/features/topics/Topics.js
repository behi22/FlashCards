import NewTopicForm from "../../components/NewTopicForm";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectAllTopics } from "./topicsSlice";
import { useSelector } from "react-redux";

export default function Topics() {
  const topics = useSelector(selectAllTopics);

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.data.id}>
            <Link to={ROUTES.topicRoute(topic.data.id)} className="topic-link">
              <div className="topic-container">
                <img src={topic.data.icon} alt="" />
                <div className="text-content">
                  <h2>{topic.data.name}</h2>
                  <p>{topic.quizIds.length} Quizzes</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
