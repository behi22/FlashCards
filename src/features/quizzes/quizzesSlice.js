import { createSlice } from "@reduxjs/toolkit";
import { addQuizForTopic } from "../topics/topicsSlice";

const quizzes = createSlice({
  name: "quizzes",
  initialState: {
    allQuizzes: {}
  },
  reducers: {
    createQuiz: (state, action) => {
      state.allQuizzes = {
        ...state.allQuizzes,
        [action.payload.id]: action.payload
      };
    }
  }
});

export const addQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuizForTopic(payload));
    dispatch(createQuiz(payload));
  };
};

export default quizzes.reducer;
export const { createQuiz } = quizzes.actions;
export const selectAllQuizzes = (state) => state.quizzes.allQuizzes;
