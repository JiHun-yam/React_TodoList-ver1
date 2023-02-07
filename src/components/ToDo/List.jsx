import React from 'react'
import './Todo.css'
import Todo from './todo.jsx'

function List({ todos, setTodos }) {
    // 형제 컴포넌트들의 event로 인해 부모컴포넌트에서 수정된 props를 받는다 

    // 매개변수 Id는 누른todo에 id 값
    const todoDeleteHandler = (Id) => {
        // filter는 값이 트루인거만 반환
        const Delete = todos.filter((todo) => {
            // 아이디값이 같지않은거만 Delete로 반환
            // 그럼 내가 누른부분은 자동적으로 삭제 
            return todo.id !== Id
        })
        //삭제된부분만 제외하고 재렌더링
        setTodos(Delete)
    }
    console.log(todos.todo)

    // 매개변수 Id는 누른todo에 id 값
    const todoChangeHandler = (Id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === Id) {
                return { ...todo, isDone: !todo.isDone }
            } else {
                return { ...todo }
            }
        })
        // 바뀐부분 재렌더링
        setTodos(newTodos)
    }



    return (
        <div className='Todolist'>
            {/* 하는중 */}
            <h2 className="list-title">Working...🔥</h2>
            <div className="list-wrapper">
                {
                    todos.filter(todo => todo.isDone === false)
                        .map((todo) => {
                            return (
                                <Todo todo={todo} key={todo.id} setTodos={setTodos} todoDeleteHandler={todoDeleteHandler} todoChangeHandler={todoChangeHandler} />
                            )
                        })
                }

            </div>
            {/* 끝난일 */}
            <h2 className="list-title">Done..! 🎉</h2>
            <div className="list-wrapper">

                {
                    todos.filter(todo => todo.isDone === true)
                        // .sort((a, b) => b - a)
                        .map((todo) => {
                            return (

                                <Todo todo={todo} key={todo.id} setTodos={setTodos} todoDeleteHandler={todoDeleteHandler} todoChangeHandler={todoChangeHandler} />
                            )
                        })
                }

            </div>



        </div>
    )
}

export default List