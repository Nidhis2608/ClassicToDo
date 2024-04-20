import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice"; 

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white shadow rounded p-5 mb-5"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
        className="flex-1 rounded p-4 mr-5 border-2 border-gray-200"
      />
      <button
        type="submit"
        className="bg-slate-300 hover:bg-slate-600 text-white font-bold py-1 px-5 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
