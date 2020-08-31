import axios from 'axios'
import { SET_TODO,ADD_TODO, DELETE_TODO } from './constant'

export const fetchTodos = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3000/todos');
        dispatch({
            type: SET_TODO,
            payload: response.data
        })
    }
}
export const postTodos = (todo) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3000/todos',todo);
        dispatch({
            type: ADD_TODO,
            payload: response.data
        })
    }
}
export const deleteTodos = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3000/todos/${id}`);
        dispatch({
            type: DELETE_TODO,
            payload:id
        })
    }
}