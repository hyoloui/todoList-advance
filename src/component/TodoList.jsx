import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"

const TodoList = () => {
    const todoList = useSelector((state)=>state.Todo)
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