import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTodoStatus,
  removeTodo,
  editTodo,
} from "../todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTodoStatus(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, text: editedText }));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div
      className={`flex items-center px-6 py-4 ${
        todo.completed ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div
        className="rounded-full border-2 p-3 mr-6 flex items-center justify-center"
        onClick={handleToggle}
        style={{
          borderColor: todo.completed ? "green" : "lightgray",
          backgroundColor: todo.completed ? "green" : "transparent",
        }}
      >
        {todo.completed && <span className="text-white font-bold">✓</span>}
      </div>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          className={`flex-1 ${
            todo.completed ? "text-gray-400 line-through" : "text-gray-500"
          }`}
        />
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? "text-gray-400 line-through" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSave} className="ml-5 text-blue-800">
          Save
        </button>
      ) : (
        <button onClick={handleEdit} className="ml-5 text-blue-800">
          Edit
        </button>
      )}
      <button onClick={handleDelete} className="ml-5 text-red-800">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
