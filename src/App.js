import './App.scss';
import React from 'react';

function App() {
  const delay = 100;
  const step = 1;
  const timerRef = React.useRef();
  const [width, setWidth] = React.useState(0);
  const [isStoped, setIsStoped] = React.useState(false);

  const run = React.useCallback(() => {
    timerRef.current = setInterval(() => setWidth(width + step), delay);
  }, [timerRef, width]);
  const reset = React.useCallback(() => {
    clearInterval(timerRef.current);
  }, [timerRef]);

  React.useEffect(() => {
    if (width !== 100) {
      run();
    }
    return () => {
      reset();
    };
  }, [width, run, reset]);

  const handleClick = () => {
    if (width === 100) {
      setWidth(0);
    } else if (isStoped) {
      run();
      setIsStoped(false);
    } else {
      setIsStoped(true);
      reset();
    }
  };
  return (
    <div className="progressbar__container">
      <span className="progressbar" data-progress={width}>
        <span
          className="progressbar__complete"
          style={{ width: `${width}%`, transitionDuration: `${delay}ms` }}></span>
      </span>
      <button className="progressbar__button" onClick={handleClick}>
        Старт/Стоп
      </button>
    </div>
  );
}

export default App;
