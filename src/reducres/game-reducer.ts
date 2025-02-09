import { Game, DEFAULT_STATE } from '../context/game-context';
import generateRandomColor from '../lib/generate-random-color';

enum ActionTypes {
  SUBMIT_GUESS = 'SUBMIT_GUESS',
  RESET_GAME = 'RESET_GAME',
}

type SubmitGuess = {
  type: ActionTypes.SUBMIT_GUESS;
  payload: string;
};

type ResetGame = {
  type: ActionTypes.RESET_GAME;
};

type Actions = SubmitGuess | ResetGame;

const gameReducer = (state: Game, action: Actions): Game => {
  const actionType = action.type;

  switch (actionType) {
    case ActionTypes.SUBMIT_GUESS:
      return {
        ...state,
        hasGuessed: true,
        colorGuess: action.payload,
        isWinner: state.correctAnswer === action.payload,
      };
    case ActionTypes.RESET_GAME:
      return { ...DEFAULT_STATE, correctAnswer: generateRandomColor() };
    default:
      console.error(`Unknow action type: ${actionType}`);
      throw new Error(`Unknown action type: ${actionType}`);
  }
};

export type { Actions };
export { gameReducer, ActionTypes };
