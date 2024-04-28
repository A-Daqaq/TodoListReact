import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  // Correct usage of useState

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue(""); // Resetting todoValue after adding a todo
        }}
      >
        Add
      </button>
    </header>
  );
}
