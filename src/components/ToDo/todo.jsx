import React from 'react'

// todo는 todos안에있는 하나하나의 값들을 의미 
// todoDeleteHandler는 todo.jsx의 상위 컴포넌트인 List.jsx에 함수 
// todoDoneChangeHandler todo.jsx의 상위 컴포넌트인 List.jsx에 함수 
function todo({ todo, todoDeleteHandler, todoChangeHandler }) {

    return (
        <div className="todo-container">
            <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.comment}</div>
            </div>
            <div className="button-set">
                <button
                    // 삭제를 위해 todo.id값을 가지고온다
                    onClick={() => todoDeleteHandler(todo.id)}
                    className="todo-delete-button button">
                    삭제하기</button>
                <button
                    // !isDone을 위해 todo.id값을 가지고온다
                    onClick={() => todoChangeHandler(todo.id)}
                    className="todo-complete-button button">
                    {/*todo.isDone가 true이면 취소 아니면 완료 반환  */}
                    {todo.isDone ? "취 소" : "완 료"}
                </button>
            </div>
        </div>
    )
}

export default todo