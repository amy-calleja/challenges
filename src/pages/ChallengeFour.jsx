import { useState } from "react";

export default function ChallengeFour() {
  const [text1, setText1] = useState("Elegant man");
  const [text2, setText2] = useState("A gentleman");
  const [result, setResult] = useState(null);

  const checkAnagram = (t1, t2) => {
    let txt1 = t1.toLowerCase().replace(/\s/g, ""); // remove spaces and convert to lower case if needed
    let txt2 = t2.toLowerCase().replace(/\s/g, "");

    txt1 = txt1.split("").sort().join(""); // make array and order letters
    txt2 = txt2.split("").sort().join("");

    return txt1 === txt2; // return true if same
  };

  const handleCheck = () => {
    let isAnagram = checkAnagram(text1, text2);
    setResult(
      isAnagram ? "Yes, they are a match!" : "No, they are not anagrams."
    );
  };

  return (
    <>
      <>
        <h3>Are they Anagrams?</h3>
        <p>
          A word, phrase, or name{" "}
          <i style={{ color: "#c69bf2" }}>
            formed by rearranging the letters of another
          </i>
          , such as spar, formed from rasp.
        </p>
      </>

      <h3 style={{ margin: "60px 0" }}>{result}</h3>
      <>
        <input
          placeholder="first word"
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          style={{ width: "300px" }}
        />
        <input
          placeholder="second word"
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          style={{ width: "300px" }}
        />
        <button onClick={handleCheck}>Check if Anagrams!</button>
      </>
    </>
  );
}
