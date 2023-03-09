import { useState } from "react";


const Todo = ({ todo }) => {
  return (
    <li> {todo.id}:  <input />   { todo.createdAt } </li>
  );
}

const todosInitial = [
    {
      id: 1,
      createdAt: "2022-09-01",
    },
    {
      id: 2,
      createdAt: "2022-09-02",
    },
    {
      id: 3,
      createdAt: "2022-09-03",
    },
    {
      id: 4,
      createdAt: "2022-09-04",
    }
];

const TodosList = () => {

    const [ todos, setTodos ] = useState(() => todosInitial);

    function todoReverse() {
      setTodos([...todos].reverse());
    }

    return (
        <div>
          <h2>Key Benefits:</h2>
          <p>Add text to input and reverse, you will see that input text also reverse accordingly. <br/> If we do not specify key it will not be moved. of if specify and index.</p>
          <button onClick={todoReverse} className="btn btn-primary">Reverse</button>
          <hr/>
          <ul className="custom_ul">
            { todos.map(todo => <Todo todo={todo} key={todo.id}/>) }
          </ul>
        </div>
    );
}

export default TodosList;