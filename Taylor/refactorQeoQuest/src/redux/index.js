
// for redux store and middleware 
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// for http requests
import axios from "axios";

let variable = "var";

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
                ...prevState,
                country: action.country,
                loading: false
            }
        case "ADD_TO_FAVORITES":
            return {
                ...prevState,
                favorites: ['Turkey', 'Greece', 'Romania', 'Hungary', 'France', 'Germany', 'Italy', 'Peru', `string ${variable}`]
            }
        default:
            return prevState;
    }
}

//ACTION CREATORS
export const addToFavorites = (country) => {
    return dispatch => {
        //is this thunk?
        dispatch({type: "ADD_TO_FAVORITES"});
        axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(response => {
                dispatch({
                    type: 'ADD_TO_FAVORITES',
                    favorites: response.data[0]
                })
            })
    }
}

export const getCountry = (country) => {
    return dispatch => {
        //DO THE PROMISE STUFF
        dispatch({type: "GET_COUNTRY"});
        axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(response => {
                dispatch({
                    type: "GET_COUNTRY",
                    country: response.data[0]
                })
            })
    }
}

/////////////////
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;