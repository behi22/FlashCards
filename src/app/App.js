import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import ROUTES from "./routes";
import Home from "../features/home/home";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.topicsRoute()} activeClassName="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.quizzesRoute()}
              exact={true}
              activeClassName="active"
            >
              Quizzes
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topics">
          <TopicsRoutes />
        </Route>
        <Route path="/quizzes">
          <QuizRoutes />
        </Route>
      </Switch>
    </Router>
  );
}

function TopicsRoutes() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewTopicForm />
        </Route>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${match.path}`}>
          <Topics />
        </Route>
      </Switch>
    </>
  );
}

function QuizRoutes() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewQuizForm />
        </Route>
        <Route path={`${match.path}/:quizId`}>
          <Quiz />
        </Route>
        <Route path={`${match.path}`}>
          <Quizzes />
        </Route>
      </Switch>
    </>
  );
}
