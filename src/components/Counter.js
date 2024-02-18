import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  let integerType;
  if (count > 0) {
    integerType = "is positive number";
  } else if (count === 0) {
    integerType = "is neutral number";
  } else {
    integerType = "is negative number";
  }

  return (
    <div>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
      <h2>
        {count} {integerType}
      </h2>
    </div>
  );
}

export default Counter;
