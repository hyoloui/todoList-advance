import React from "react"
import { useSelector } from "react-redux";
import InputForm from "./component/InputForm";
import TodoList from "./component/TodoList";

function App() {
  // Todo initialState 조회 하기

  return (
    <main className="App">
      <InputForm/>
      <TodoList/>
    </main>
  );
}

export default App;
