import { useGameContext } from '../contexts/game-context';

const ColorSwatch = () => {
  const { correctAnswer } = useGameContext();

  return (
    <div
      className="h-96 w-96"
      style={{ backgroundColor: '#' + correctAnswer }}
    />
  );
};

export default ColorSwatch;
