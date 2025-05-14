import { useState } from "react";

export default function ChallengeSix() {
  const curry = (a) => (b) => (c) => {
    return a + b + c;
  };
  const start = curry(5);

  const newerCurry = start(6)(7);

  function go(a) {
    return function two(b) {
      return function three(c) {
        return a + b + c;
      };
    };
  }

  const olderCurry = go(1)(2)(3);

  return (
    <>
      <h2>Let's Make Curry! 🍛</h2>
      <h4> New curry fnc: {newerCurry}</h4>
      <h4>Older curry fnc: {olderCurry}</h4>
    </>
  );
}
