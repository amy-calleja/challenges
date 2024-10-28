import { useState } from "react";

export default function ChallengeThree() {
  const [number, setNumber] = useState(121);
  const [text, setText] = useState("hello");
  const [answer, setAnswer] = useState();

  const checkNumber = (num) => {
    // using in-built methods
    let numString = num.toString();
    let numReversed = numString.split("").reverse().join("");

    return numString === numReversed; // compare the original number as a string to the reversed, return bool
  };

  const displayAnswer = (isTrue) => {
    setAnswer(isTrue ? "Yes it is!" : "Nope, not a palindrome.");
  };

  const handleCheck = () => {
    let isTrue = checkNumber(number);
    displayAnswer(isTrue);
  };

  const checkText = (txt) => {
    // using non-built in methods

    let reversed = "";

    for (let index = txt.length - 1; index >= 0; index--) {
      reversed += txt[index]; // add to string, backwards from last index
    }
    return txt === reversed; // returns bool
  };

  const handleCheckText = () => {
    let isTrue = checkText(text);
    displayAnswer(isTrue);
  };

  return (
    <>
      <>
        <h3>Palindromes</h3>
        <p>
          A word, phrase, or sequence that{" "}
          <i style={{ color: "#c69bf2" }}>
            reads the same backwards as forwards
          </i>
          , e.g. madam or deed.
        </p>
      </>

      <h3 style={{ margin: "60px 0" }}>{answer}</h3>

      <div style={{ margin: "30px 0 10px 0" }}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{ width: "170px" }}
        />
        <button onClick={handleCheck}>Check Number</button>
      </div>

      <>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "200px" }}
        />
        <button onClick={handleCheckText}>Check Text</button>
      </>
    </>
  );
}
