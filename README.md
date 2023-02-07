# 항해99 주특기(React) 1주차 과제 

## 소개 
항해99 주특기(React) 입문 개인과제 
TodoList 만들기 

<img width="1440" alt="스크린샷 2023-02-07 01 13 49 복사본" src="https://user-images.githubusercontent.com/95469708/217130368-ae2e7adc-2809-41a4-90ac-d22a17757c67.png">


## 기간
23-02-05 ~ 23-02-06

## 기능 
- Create(생성)     각각의 input에 값을 넣고 버튼을 누르면 todos 생성
- Read(일기)        존재한 todos를 보여준다
- Update(갱신)    존재한 todos 버튼을 눌러 isDone을 반대값을 준다 
				isDone: true 이면 false 반환하여 위치를 이동한다
- Delete(삭제)      존재한 todo 삭제 버튼을 눌러 todos 를 삭제한다 
- 컴포넌트 분리 

### 사용한 기술 ![:cool-doge:](https://emoji.slack-edge.com/T01L2TNGW3T/cool-doge/f2792b8680627f7c.gif)

 ![](https://img.shields.io/badge/Html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)
   ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white) 
    ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)  
     ![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)   
    ![](https://img.shields.io/badge/Gir-F05032?style=for-the-badge&logo=Git&logoColor=white)   
 ![](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

## 🛠️ TOOLS 
 ![](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)


## 트러블슈팅 ⚽️

1. form안에 요소를 클릭할떄마다  새로운 todos가 생기는 문제가 생겼다
	문제는 form onClick 문제였다 form 요소를 누르면
	onSubmitHandler 이 함수가 작동하게 만들어버렸다 
	수정하기 위해 onClick 에서 onSubmit 으로 수정해서 해결혔다 

```jsx
%3Cform onClick={onSubmitHandler} className="HeaderInputBoxForm"%3E
<div className='input-ground'>
<label className="form-label">Title</label>
<input required type="text" name="title" placeholder='제목입력'
className="add-input input-body" onChange={onChangeHandler}
value={inputTodo.title}
/>
<label className="form-label">Comment</label>
<input required type="text" name="comment" placeholder='댓글입력' className="add-input input-body"
onChange={onChangeHandler}
value={inputTodo.comment}/>
</div>
<button className="add-button">추가하기</button>
</form>
```
	
2. 리액트의 불변성을 지키지않고 직접 수정을 가하여 값을 바꿨지만 리레더링이 되지 않는 이슈를 발견을 했고  기술매니저님에게 질문후 얕은복사인 ... 스레드 문법 or  prev(이전의 값을 가져온다) 사용하여 값을수정해도 리레더링이 되게 구현을 성공했다
