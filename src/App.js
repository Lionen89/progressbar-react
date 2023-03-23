import './App.css';

function App() {
  const handleClick = () => {};
  return (
    <div className="progressbar__container">
      <span className="progressbar"></span>
      <button className="progressbar__button" onClick={handleClick}></button>
    </div>
  );
}

export default App;
