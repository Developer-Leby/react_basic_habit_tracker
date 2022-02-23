import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = (props) => {
  return (
    <>
      <HabitAddForm onAdd={props.onAdd} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onDelete={props.onDelete}
            onAdd={props.onAdd}
          />
        ))}
      </ul>
      <button className="habit-reset" onClick={props.onReset}>
        Reset All
      </button>
    </>
  );
};

export default Habits;
