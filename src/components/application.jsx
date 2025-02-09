import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';
import { GameProvider, useGameContext } from '../contexts/game-context';

const ResetAction = () => {
  const { reset } = useGameContext();

  return <button onClick={reset}>Reset Color</button>;
};

const Application = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <GameProvider>
        <ColorSwatch />
        <GameInput />
        <GameStatus />
        <ResetAction />
        <ExpensiveComponent />
      </GameProvider>
    </main>
  );
};

export default Application;
