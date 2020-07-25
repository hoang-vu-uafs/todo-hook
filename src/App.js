import React, { useState } from "react";
import Header from "./Components/Header";
import TextBar from "./Components/TextBar";
import List from "./Components/List";

import "./App.css";

let id = 0;

function App() {
  // state = {
  //   text: "",
  //   todos: [],
  // };

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandle = (e) => {
    setText(e.target.value);
  };

  function addHandle(id) {
    setTodos([...todos, { theText: text, theCheck: false, theID: id }]);
  }

  const deleteHandle = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);

    // console.log(this.state.todos);
  };

  const checkHandle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.theID !== id) return todo; //todo.id
        return {
          theText: todo.theText,
          theCheck: !todo.theCheck,
          theID: todo.theID,
        };
      })
    );
  };

  const countChecked = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (todo.theCheck === true) {
        count++;
      }
    });

    return count;
  };

  return (
    <div className="App">
      <Header leng={todos.length} check={countChecked()} />
      <TextBar input={inputHandle} add={() => addHandle(id++)} />
      <List todos={todos} check={checkHandle} delete={deleteHandle} />
    </div>
  );
}

export default App;
