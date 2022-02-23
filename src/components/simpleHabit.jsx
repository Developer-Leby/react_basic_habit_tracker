import React, { useEffect, useRef, useState } from "react";

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  });

  useEffect(() => {
    console.log(`mounted!: ${count}`);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
