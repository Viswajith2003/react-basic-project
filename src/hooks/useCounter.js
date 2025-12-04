import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increCounter = () => {
    setCount(count + 1);
  };
  const decreCounter = () => {
    setCount(count - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };

  return {increCounter, decreCounter, resetCounter, count, setCount};
}

export default useCounter;
