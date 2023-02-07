import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import InputBox from './components/InputBox/InputBox.jsx'
import List from './components/ToDo/List.jsx'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: '안녕하세요',
      comment: '안녕하세요',
      isDone: false,
    },
    {
      id: 1,
      title: 'HI',
      comment: 'nice to meet you',
      isDone: false,
    },
    {
      id: 2,
      title: 'HELLO',
      comment: 'l am korean',
      isDone: true,
    }

  ])

  return (
    <div className="App">
      <Header />
      <InputBox todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
