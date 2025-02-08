import { useEffect, useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';

const DEFAULT_STATE = {
  colorGuess: '',
  correctAnswer: generateRandomColor(),
  hasGuessed: false,
  isWinner: false,
};

const Application = () => {
  const [gameState, setGameState] = useState(DEFAULT_STATE);

  const { colorGuess, correctAnswer, hasGuessed, isWinner } = gameState;

  useEffect(() => {
    if (hasGuessed) {
      if (correctAnswer === colorGuess) {
        setGameState((prev) => {
          return {
            ...prev,
            isWinner: true,
          };
        });
      }
    }
  }, [colorGuess, correctAnswer, hasGuessed]);

  const handleOnColorGuessChange = (newValue) => {
    setGameState((prev) => {
      return {
        ...prev,
        colorGuess: newValue,
      };
    });
  };

  const handleOnSubmit = () => {
    setGameState((prev) => {
      return {
        ...prev,
        hasGuessed: true,
      };
    });
  };

  const handleOnReset = () => {
    setGameState({
      ...DEFAULT_STATE,
      correctAnswer: generateRandomColor(),
    });
  };

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) => handleOnColorGuessChange(e.target.value)}
        onSubmit={handleOnSubmit}
        disabled={hasGuessed}
      />
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button onClick={handleOnReset} type={hasGuessed ? 'submit' : 'button'}>
        Reset Color
      </button>
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
