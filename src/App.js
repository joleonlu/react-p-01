

import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
//import './App.css';


const todos = [
  { Text: 'cortar cebolla', completed: true },
  { Text: 'tomar el curso de intro a react', completed: false },
  { Text: 'Lorar con la llorona', completed: false },
  { Text: 'Lalalalalala', completed: false },

];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />


      <TodoSearch />

      <TodoList>

        {todos.map(todo => (
          <TodoItem
            key={todo.Text}
            Text={todo.Text}
            completed={todo.completed}
          />
        ))}

      </TodoList>

      <CreateTodoButton />

      <button>+</button>
    </React.Fragment>
  );
}

export default App;
