import { useState } from "react";

export default function ChallengeTwo() {
  const [text, setText] = useState("");
  const [result, setResult] = useState();

  const reverseString = (strg) => {
    let str = "";

    for (let index = strg.length - 1; index >= 0; index--) {
      str += strg[index];
    }
    return str;
  };

  const handleSubmit = () => {
    let res = reverseString(text);
    setResult(res);
  };

  return (
    <>
      <h3>Reverse the String</h3>
      <h2 style={{ color: "#c69bf2", padding: "15px 0" }}>{result}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "200px" }}
      />
      <button onClick={handleSubmit}>Reverse!</button>
    </>
  );
}
