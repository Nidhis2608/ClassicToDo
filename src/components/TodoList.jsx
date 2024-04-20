
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ filter }) => {
 
  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
