import { useSelector } from 'react-redux';
import { selectCorrectAnswer } from '../features/game/game-selector';

const ColorSwatch = ({ color, ...props }) => {
  const correctAnswer = useSelector(selectCorrectAnswer);

  return (
    <div
      className="h-96 w-96"
      {...props}
      style={{ backgroundColor: '#' + correctAnswer }}
    />
  );
};

export default ColorSwatch;
