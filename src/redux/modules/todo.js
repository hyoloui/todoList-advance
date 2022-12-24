// 초기 상태값
const initialState = [
    {
        id: 1,
        title: "오늘 운동",
        content: "하체(메인: 스쿼트)",
        isDone: false,
    },
    {
        id: 2,
        title: "오늘 저녁",
        content: "현미밥 300g, 닭가슴살 100g",
        isDone: false,
    },
    {
        id: 3,
        title: "취침전",
        content: "우유 + 프로틴 1스쿱",
        isDone: false,
    },
    {
        id: 4,
        title: "내일 운동",
        content: "등(메인: 풀업)",
        isDone: false,
    },
];

// 상수 만들기
const ADD_TODO = "ADD_TODO";

export const add_todo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

// 리듀서
const Todo = (state = initialState, action) => {
    // 어떤 action을 했는지 출력
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        default:
            return state;
    }
};

export default Todo;
