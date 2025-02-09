import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import generateRandomColor from '../lib/generate-random-color';
import { Actions, gameReducer, ActionTypes } from '../reducres/game-reducer';

export type Game = {
  colorGuess: string;
  correctAnswer: string;
  hasGuessed: boolean;
  isWinner: boolean;
};

export const DEFAULT_STATE: Game = {
  colorGuess: '',
  correctAnswer: generateRandomColor(),
  hasGuessed: false,
  isWinner: false,
};

type GameContextType = {
  state: Game;
  dispatch: Dispatch<Actions>;
  ACTIONS: typeof ActionTypes;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, DEFAULT_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch, ACTIONS: ActionTypes }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must bew used within GameRpovider');
  }

  return { ...context };
};
