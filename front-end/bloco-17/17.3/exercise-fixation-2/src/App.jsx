import React, { useState } from 'react';
import useArray from './hooks/useArray';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const todos = useArray(['Learn React', 'Learn Hooks']);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        <i>Todo list</i>
      </h1>
      <form>
        <input
          style={{ marginRight: '10px' }}
          type="text"
          placeholder="Tarefa"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="button" onClick={() => todos.add(todoInput)}>
          Adicionar tarefa
        </button>
      </form>
      <div>
        <h4>Tarefas criadas</h4>
        <ul>
          {todos.value.map((todo, index) => (
            <div style={{ display: 'flex', marginBottom: '10px' }} key={index}>
              <li style={{ marginRight: '10px' }}>{todo}</li>
              <button type="button" onClick={() => todos.remove(index)}>
                Remover
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
