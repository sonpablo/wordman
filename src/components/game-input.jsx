import { useState } from 'react';
import { useGame } from '../context/game-context';

const GameInput = () => {
  const { state, dispatch, ACTIONS } = useGame();
  const { hasGuessed } = state;

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SUBMIT_GUESS, payload: value });
  };

  return (
    <form className="flex items-end" onSubmit={handleSubmit}>
      <label htmlFor="game-input">
        Enter some letters
        <input
          id="game-input"
          type="text"
          maxLength={6}
          pattern="[a-f|A-F|0-9]{6}"
          placeholder="C0FF33"
          disabled={hasGuessed}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
      <button className="whitespace-nowrap" type="submit" disabled={hasGuessed}>
        Take a Guess
      </button>
    </form>
  );
};

export default GameInput;
