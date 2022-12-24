import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"

const TodoList = () => {
    const todoList = useSelector((state)=>state.Todo)

    // initialState
    const [todos, setTodos] = useState(null);
    const fetchTodos = async () => {
        const { data } = await axios.get("http://localhost:3001/todos");
        setTodos(data)
    }

    // Do fetchTodos rendering
    useEffect(()=>{
        fetchTodos();
    },[])

    console.log(todos)

    return (
        <div>
            {todoList.map((todo)=>{
                return (
                    <TodoWrapper key={todo.id}>
                        <hr/>
                        <div>{todo.id}</div>
                        <h2>{todo.title}</h2>
                        <h3>{todo.content}</h3>
                        <hr/>
                    </TodoWrapper>
                );
            })}
        </div>    
    );
}

const TodoWrapper = styled.div`
    background: lightblue;
`;

export default TodoList;