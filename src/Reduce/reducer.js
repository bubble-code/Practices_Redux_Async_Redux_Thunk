import { ADD_TODO, DELETE_TODO, SET_TODO } from './constant'
const initialState = {
    todo: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { todo: [...state.todo, action.payload] }
        case DELETE_TODO:
            console.log(action.payload)
            return { todo: state.todo.filter(item => item.id !== action.payload) }
        case SET_TODO:
            console.log(action.payload)
            return {
                todo: [...action.payload]
            }
        default:
            return state
    }
}