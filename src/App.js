
import './App.css';
import TodoInput from './Component/Todoinput';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
