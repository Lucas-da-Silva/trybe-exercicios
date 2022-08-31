import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

function App() {
  const tasks = ['lunch', 'dinner', 'run', 'study'];
  const jsxTasks = tasks.map((task) => <li>{task}</li>)
  return (
    <ul>
      {Task('Maravilhoso')}
      {jsxTasks}
    </ul>
  )
}

export default App;
