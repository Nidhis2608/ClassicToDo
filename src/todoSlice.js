// todoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem('todos');
  return serializedState ? JSON.parse(serializedState) : [];
};

const initialState = {
  todos: loadFromLocalStorage(),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleTodoStatus: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[index].text = action.payload.text;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, toggleTodoStatus, editTodo, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
