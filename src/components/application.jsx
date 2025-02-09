import React, { useReducer, Suspense } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
// import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';
import { sleep } from '../lib/sleep';
import { block } from '../lib/sleep';
// const ExpensiveComponent = React.lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve(import('./expensive-component')), 5000),
//     ),
// );

const ExpensiveComponent = React.lazy(() =>
  sleep(2000).then(() => import('./expensive-component')),
);

const initialState = {
  colorGuess: '',
  correctAnswer: generateRandomColor(),
  hasGuessed: false,
  isWinner: false,
};

const reducer = (state, action) => {
  console.log('🥷🏻 son-p 🙅 application.jsx:16 🙅 reducer 🙅 action: ', action);
  switch (action.type) {
    case 'SET_GUESS':
      return { ...state, colorGuess: action.payload };
    case 'SUBMIT_GUESS':
      return {
        ...state,
        hasGuessed: true,
        isWinner: state.colorGuess === state.correctAnswer,
      };
    case 'RESET':
      return {
        ...initialState,
        correctAnswer: generateRandomColor(),
      };
    default:
      return state;
  }
};

const sayHello = () => {
  console.log('Hello, world!');
};

const Application = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('🥷🏻 son-p 🙅 application.jsx:37 🙅 Application: ');
  const { correctAnswer, hasGuessed, isWinner, colorGuess } = state;

  console.log('Inicio');

  setTimeout(() => {
    console.log('Esto debería aparecer después de 1s');
  }, 1000);

  block(3000); // Bloquea por 3 segundos

  console.log('Fin');

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) =>
          dispatch({ type: 'SET_GUESS', payload: e.target.value })
        }
        onSubmit={() => dispatch({ type: 'SUBMIT_GUESS' })}
        disabled={hasGuessed}
      />
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset Color</button>
      <Suspense
        fallback={
          <span role="status" aria-label="polite" aria-busy="true">
            Loading
          </span>
        }
      >
        <ExpensiveComponent />
      </Suspense>
    </main>
  );
};

export default Application;
