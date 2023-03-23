import './App.scss';

function App() {
  const handleClick = () => {};
  return (
    <div className="progressbar__container">
      <span className="progressbar"></span>
      <button className="progressbar__button" onClick={handleClick}>
        Старт/Стоп
      </button>
    </div>
  );
}

export default App;
