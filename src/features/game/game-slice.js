import { createSlice } from '@reduxjs/toolkit';
import generateRandomColor from '../../lib/generate-random-color';

const initialState = {
  colorGuess: '',
  correctAnswer: generateRandomColor(),
  hasGuessed: false,
  isWinner: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitGuess: (state, action) => {
      state.hasGuessed = true;
      state.colorGuess = action.payload;
      state.isWinner = state.correctAnswer === action.payload;
    },
    resetGame: (state) => {
      state.colorGuess = '';
      state.correctAnswer = generateRandomColor();
      state.hasGuessed = false;
      state.isWinner = false;
    },
  },
});

export const { submitGuess, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
