import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { InputTodos } from './Component/InputTodos';
import { ShowTodos } from './Component/ShowTodos';
import {DELETE_TODO} from './Reduce/constant'
import {fetchTodos, deleteTodos} from './Reduce/actions'

function App() {
  const show = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteTodos(id))
}
useEffect(() => {
  dispatch(fetchTodos())
 
}, [])
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <ShowTodos data={show} dispacthh={handleDelete}/>
        </ul>
        <p>
        </p>
        <InputTodos dispatch={dispatch} style={{ background: 'white' }} />
      </header>
    </div>
  );
}

export default App;
