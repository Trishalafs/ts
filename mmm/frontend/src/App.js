import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/todos`);
      console.log('Fetched data:', res.data);
      if (Array.isArray(res.data)) {
        setTodos(res.data);
      } else {
        console.error("Expected array but got:", res.data);
        setTodos([]); // fallback
      }
    } catch (err) {
      console.error('Failed to fetch todos:', err);
      setTodos([]); // fallback to avoid crash
    }
  };

  const addTodo = async () => {
    if (!text) return;
    await axios.post('${process.env.REACT_APP_API_URL}/api/todos', { text });
    setText('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/todos/${id}`);
    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await axios.patch(`${process.env.REACT_APP_API_URL}/api/todos/${id}/toggle`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>To-Do List</h1>

      {/* form wrapper */}
      <div className="form">
        <input
          type="text"
          placeholder="What needs doing?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* list wrapper */}
      <ul className="todo-list">
      {Array.isArray(todos) &&
  todos.map((todo) => (
    <TodoItem key={todo._id} todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
))}

      </ul>
    </div>
  );
}

export default App;
