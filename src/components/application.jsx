import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';
import { GameProvider, useGame } from '../context/game-context';

const ResetAction = () => {
  const { dispatch, ACTIONS } = useGame();

  const handleClick = () => {
    dispatch({ type: ACTIONS.RESET_GAME });
  };

  return <button onClick={handleClick}>Reset Color</button>;
};

const Game = () => {
  return (
    <>
      <ColorSwatch />
      <GameInput />
      <GameStatus />
      <ResetAction />
      <ExpensiveComponent />
    </>
  );
};

const Application = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <GameProvider>
        <Game />
      </GameProvider>
    </main>
  );
};

export default Application;
