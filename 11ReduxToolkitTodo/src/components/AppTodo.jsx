import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/Todo/todoSlice';

function AppTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo({ text: input })); // Dispatching the action with the todo text
      setInput(''); // Reset the input field after adding the todo
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-900 focus:border-indigo-800 focus:ring-3 focus:ring-indigo-900 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AppTodo;
