import { useEffect, useState } from 'react';
import { useGameContext } from '../contexts/game-context';

const GameInput = () => {
  const { updateState, hasGuessed, colorGuess } = useGameContext();

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(colorGuess);
  }, [colorGuess]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateState({ hasGuessed: true, colorGuess: value });
  };

  return (
    <form className="flex items-end" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="game-input">
        Enter some letters
        <input
          id="game-input"
          type="text"
          maxLength={6}
          pattern="[a-f|A-F|0-9]{6}"
          placeholder="C0FF33"
          disabled={hasGuessed}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
      <button className="whitespace-nowrap" type="submit" disabled={hasGuessed}>
        Take a Guess
      </button>
    </form>
  );
};

export default GameInput;
