import { React, useState } from 'react'
import './InputBox.css'

function InputBox({ todos, setTodos }) {

    const initialState = { id: null, title: "", comment: "", isDone: false } //초기값


    const [inputTodo, setInputTodo] = useState(initialState)



    const onChangeHandler = (event) => {
        // value = title name = comment
        const { value, name } = event.target
        console.log(value, name)
        //얕은복사로기존값복사하고 새로추가된 값 들 대입 
        setInputTodo({ ...inputTodo, [name]: value, id: Math.random() })

    }

    const onSubmitHandler = (e) => {
        e.preventDefault() // 작동 멈춰!!!!!
        // onChangeHandler에서 setInputTodo으로 바꾼 inputTodo 으로 값넣고 재렌더링ㄴ
        setTodos([...todos, inputTodo])
        // input창을 비우기
        setInputTodo(initialState)


    }




    return (
        <div className="HeaderInputBox">

            {/* 버튼이 눌리면 */}
            {/* 멍청하게도 onClick 를 해버려서 form안에 태그 누를때마다 todos가 생성해버렸다 하 나는 멍청이다  */}
            <form onSubmit={onSubmitHandler} className="HeaderInputBoxForm">
                <div className='input-ground'>
                    <label className="form-label">Title</label>

                    <input
                        required
                        type="text"
                        name="title"
                        placeholder='제목입력'
                        className="add-input input-body"
                        onChange={onChangeHandler}
                        value={inputTodo.title}
                    />
                    <label className="form-label">Comment</label>

                    <input
                        required
                        type="text"
                        name="comment"
                        placeholder='댓글입력'
                        className="add-input input-body"
                        onChange={onChangeHandler}
                        value={inputTodo.comment}
                    />

                </div>
                <button className="add-button">추가하기</button>

            </form>
        </div >
    )
}

export default InputBox