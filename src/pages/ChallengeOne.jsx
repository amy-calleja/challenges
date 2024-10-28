import { useState } from "react";
import "../App.css";

function ChanllengeOne() {
  const [number, setnumber] = useState(0);
  const [result, setResult] = useState([]);
  const [foundResult, setFoundResult] = useState();
  const [showDisplay, setShowDisplay] = useState(false);

  const calculate = (n) => {
    let sequence = [];

    // set first two vals
    let prev = 0;
    let curr = 1;

    for (let index = 0; index < n; index++) {
      sequence.push(prev);

      // update vals for next sequence //

      let temp = curr; // store curr val

      curr = prev + curr; // add two numbers to create new curr
      prev = temp; // use old curr for new prev val
    }
    return sequence;
  };

  const handleClick = () => {
    let sequence = calculate(number);
    setResult(sequence);
  };

  const handleFind = () => {
    let sequence = calculate(number);
    setResult(sequence);
    let num = sequence[Number(number - 1)]; // find using the index in the array
    setFoundResult(num);
    setShowDisplay(true);
  };

  //suffix func for display
  function addSuffix(num) {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    const suffix =
      lastTwoDigits >= 11 && lastTwoDigits <= 13
        ? "th"
        : lastDigit === 1
        ? "st"
        : lastDigit === 2
        ? "nd"
        : lastDigit === 3
        ? "rd"
        : "th";

    return `${num}${suffix}`;
  }

  return (
    <>
      <h3>Fibonacci Sequence</h3>
      <p>[ {result.join(", ")} ]</p>
      {showDisplay && (
        <h5>
          The {addSuffix(number)} number is {foundResult}
        </h5>
      )}
      <div className="card">
        <input
          value={number}
          onChange={(e) => {
            setShowDisplay(false);
            setnumber(e.target.value);
          }}
        />
        <button onClick={handleClick}>Calculate</button>
        <button onClick={handleFind}>Find N'th Number</button>
      </div>
    </>
  );
}

export default ChanllengeOne;
