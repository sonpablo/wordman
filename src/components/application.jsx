import { useDispatch } from 'react-redux';
import { resetGame } from '../features/game/game-slice';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';

const ResetGame = () => {
  const dispatch = useDispatch();

  const handleOnReset = () => {
    dispatch(resetGame());
  };

  return <button onClick={handleOnReset}>Reset Color</button>;
};

const Application = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorSwatch />
      <GameInput />
      <GameStatus />
      <ResetGame />
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
