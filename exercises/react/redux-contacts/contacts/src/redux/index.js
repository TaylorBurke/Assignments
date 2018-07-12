import {createStore} from  "redux";


const initialState = {
    contacts: []
}

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "DEL_CONTACT":
            return {
                contacts: state.contacts.filter((item, i) => { return i !== action.contact})
            }
        default:
            return state;
    }
}

// Action Creators

export const delContact = (contact) => {
    return {
        type: "DEL_CONTACT",
        contact
    }
}

export const addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

const store = createStore(contactReducer);

store.subscribe(() => console.log(store.getState()))

export default store;
