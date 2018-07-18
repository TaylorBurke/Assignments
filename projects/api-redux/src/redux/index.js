import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
    country: null,
    loading: false,
    favorites: []
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        //case ADDTOFAVORITES
        // return a new state.favorites containing the country from action.country
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
        dispatch({type: "GET_COUNTRY"});
        axios.get(`https://restcountries.eu/rest/v2/name/${input}`)
            .then(response => {
                dispatch({
                    type: "GET_COUNTRY",
                    country: response.data[0]
                })
            })
    }
}

export const addToFavorites = country => {
    // return an action containing the country
}

/////////////////
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;