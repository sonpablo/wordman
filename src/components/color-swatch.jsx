import { useGame } from '../context/game-context';

const ColorSwatch = ({ color, ...props }) => {
  const { state } = useGame();

  return (
    <div
      className="h-96 w-96"
      {...props}
      style={{ backgroundColor: '#' + state.correctAnswer }}
    />
  );
};

export default ColorSwatch;
