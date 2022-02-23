import React, { memo } from "react";

const Habit = memo((props) => {
  const { name, count } = props.habit;

  const handleIncrement = () => {
    props.onIncrement(props.habit);
  };

  const handleDecrement = () => {
    props.onDecrement(props.habit);
  };

  const handleDelete = () => {
    props.onDelete(props.habit);
  };

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
