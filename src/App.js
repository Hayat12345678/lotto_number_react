import { useState } from "react";
import "./App.css";
import LottoNumber from "./components/LottoNumber";

function App() {
  const [luckyNumbers, setLuckyNumbers] = useState([]);
  const [extraNumber, setExtraNumber] = useState(0);

  const generateNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 6; i++) {
      let nextNumber;
      do {
        nextNumber = Math.floor(Math.random() * 49) + 1;
      // eslint-disable-next-line no-loop-func
      } while (newNumbers.find((item) => nextNumber === item));
      newNumbers.push(nextNumber);
    }
    setLuckyNumbers(newNumbers.sort((a, b) => a - b));

    const newExtraNumber = Math.floor(Math.random() * 10);
    setExtraNumber(newExtraNumber);
  };

  const lottoNumberDisplayArray = luckyNumbers.map((number) => {
    return <LottoNumber key={`lottoNumber-${number}`} lottoNumber={number} />;
  });

  return (
    <div className="App">
      <main>
        <h1>Lotto 6 / 49</h1>
        <h3>Generating random numbers</h3>
        {luckyNumbers.length < 6 ? undefined : (
          <section className="number-container">
            {lottoNumberDisplayArray}
            <LottoNumber lottoNumber={extraNumber} extra />
          </section>
        )}
        <section className="btn-container">
          <button
            className="btn"
            onClick={() => {
              setLuckyNumbers([]);
            }}
          >
            Reset
          </button>
          <button
            className="btn"
            onClick={() => {
              generateNumbers();
            }}
          >
            Generate Lucky Numbers
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
