import { createStore, applyMiddleWare, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { getTodos } from './redux'
 

// asyncronous Action creators
export const getTodos = () => {
    const getTodos = () => {
        axios.get('https://api.vschool.io/natej/todo/')
            .then(response => {
                dispatch({
                    type: "GET_TODOS",
                    todos: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const initialState = {
        todos: []
    }

    // Reducer
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "GET_TODOS":
                return {
                    todos: action.todos
                }
            default:
                return state
        }
    }
}

export default createStore(reducer, applyMiddleware(thunk));