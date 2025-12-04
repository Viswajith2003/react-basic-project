import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { increCounter, resetCounter, decreCounter,count} = useCounter();

  return (
    <div>
      <h2>Counter :{count}</h2>
      <div className="flex gap-5">
        <button onClick={increCounter}>Incre</button>
        <button onClick={resetCounter}>Reset</button>
        <button onClick={decreCounter}>Decr</button>
      </div>
    </div>
  );
}
