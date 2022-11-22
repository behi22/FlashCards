import { createSlice } from "@reduxjs/toolkit";

const topics = createSlice({
  name: "topics",
  reducers: {
    addTopic: (state, action) => {
      state.allTopics = {
        [action.payload.id]: {
          data: action.payload,
          quizIds: []
        },
        ...state.allTopics
      };
    },
    addQuizForTopic: (state, action) => {
      const topicId = action.payload.topicId;
      state.allTopics[topicId].quizIds.push(action.payload.id);
    }
  },
  initialState: {
    allTopics: {}
  }
});

export const selectAllTopics = (state) => state.topics.allTopics;
export default topics.reducer;
export const { addTopic, addQuizForTopic } = topics.actions;
