import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitGuess } from '../features/game/game-slice';
import { selectHasGuessed } from '../features/game/game-selector';

const GameInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const hasGuessed = useSelector(selectHasGuessed);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitGuess(value));
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
          value={value}
          onChange={handleChange}
        />
      </label>
      <button className="whitespace-nowrap" type="submit" disabled={hasGuessed}>
        Take a Guess
      </button>
    </form>
  );
};

export default GameInput;
