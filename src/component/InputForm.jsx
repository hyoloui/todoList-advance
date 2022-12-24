import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../redux/modules/Todo.js";

export default function InputForm() {
    // dispatch 적용
    const dispatch = useDispatch();
    // 제목, 내용 useState 활용
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // onChange 활용하여 setState 해주기
    const titleInputChange = (event) => {
        setTitle(event.target.value);
    };
    const contentInputChange = (event) => {
        setContent(event.target.value);
    };
    // ----------------------------onchange end.

    const todoState = useSelector((state) => state.Todo);
    const todoId = useSelector((state) => state.Todo.length);
    // reducer action 보내기
    // form이 onSubmit 되면 redux state 추가
    const newTodo = (event) => {
        event.preventDefault();

        // state 말고 newTodo 라는 변수로 할당하여 payload 전달
        const newTodo = {
            id: todoId + 1,
            title,
            content,
            isDone: false,
        };

        dispatch(add_todo(newTodo));
    };

    return (
        <form onSubmit={(event) => newTodo(event)}>
            <label htmlFor="title">오늘 할 일 : </label>
            <input
                name="title"
                onChange={(event) => titleInputChange(event)}
                value={title}
            ></input>

            <label htmlFor="content"> 상세 내용 : </label>
            <input
                name="content"
                onChange={(event) => contentInputChange(event)}
                value={content}
            ></input>
            <button>추가하기</button>
        </form>
    );
}
