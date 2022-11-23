import { createSlice } from "@reduxjs/toolkit";

const cards = createSlice({
  name: "cards",
  initialState: {
    allCards: {}
  },
  reducers: {
    addCards: (state, action) => {
      state.allCards = {
        [action.payload.id]: action.payload,
        ...state.allCards
      };
    }
  }
});

export const { addCards } = cards.actions;
export default cards.reducer;
export const selectAllCards = (state) => state.cards.allCards;
