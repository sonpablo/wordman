import { createSelector } from '@reduxjs/toolkit';

const selectGameState = (state) => state.game;

export const selectCorrectAnswer = createSelector(
  [selectGameState],
  (game) => game.correctAnswer,
);

export const selectHasGuessed = createSelector(
  [selectGameState],
  (game) => game.hasGuessed,
);

export const selectIsWinner = createSelector(
  [selectGameState],
  (game) => game.isWinner,
);
