import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [idInterval, setIdInterval] = useState(null);

  const clickFn = () => {
    setCounter((memoCounter) => {
      return memoCounter + 1;
    });
  };

  const initCounter = () => {
    const _interval = setInterval(() => {
      console.log(counter);
      setCounter((memoCounter) => memoCounter + 1);
    }, 500);
    setIdInterval(_interval);
  };

  const stopInterval = () => {
    console.log(idInterval);
    clearInterval(idInterval);
  };

  return (
    <div>
      <button onClick={initCounter}>Iniciar</button>
      <p> {counter} </p>
      <button onClick={stopInterval}>Stop</button>
    </div>
  );
};

export default Counter;
