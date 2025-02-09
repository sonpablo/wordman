import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import generateRandomColor from '../lib/generate-random-color';

const DEFAULT_STATE = {
  colorGuess: '',
  correctAnswer: generateRandomColor(),
  hasGuessed: false,
  isWinner: false,
};

type Game = {
  colorGuess?: string;
  correctAnswer: string;
  hasGuessed: boolean;
  isWinner: boolean;
};

type GameContextType = Game & {
  updateState: (newState: Partial<Game>) => void;
  reset: () => void;
};

const GameContext = React.createContext<GameContextType>({
  ...DEFAULT_STATE,
  updateState: () => {},
  reset: () => {},
});

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameStae] = useState(DEFAULT_STATE);

  useEffect(() => {
    if (gameState.hasGuessed) {
      if (gameState.correctAnswer === gameState.colorGuess) {
        updateState({ isWinner: true });
      }
    }
  }, [gameState.colorGuess, gameState.correctAnswer, gameState.hasGuessed]);

  const updateState = (newState: Partial<Game>) => {
    setGameStae((prev) => {
      return {
        ...prev,
        ...newState,
      };
    });
  };

  const reset = useCallback(() => {
    setGameStae({
      ...DEFAULT_STATE,
      correctAnswer: generateRandomColor(),
    });
  }, []);

  return (
    <GameContext.Provider value={{ ...gameState, updateState, reset }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext<GameContextType>(GameContext);

  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return {
    ...context,
  };
};
