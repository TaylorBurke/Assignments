import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
    joke: null,
    loading: false
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "START_LOADING":
            return {
                ...prevState,
                loading: true
            }
        case "GET_COUNTRY":
            return {
                country: action.country,
                loading: false
            }
        default:
            return prevState;
    }
}

//ACTION CREATORS

export const getCountry = (input) => {
    return dispatch => {
        //DO THE PROMISE STUFF
        dispatch({type: "START_LOADING"});
        axios.get(`https://restcountries.eu/rest/v2/name/${input}?fullText=true`)
            .then(response => {
                dispatch({
                    type: "GET_JOKE",
                    joke: response.data.value
                })
            })
    }
}

/////////////////
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;