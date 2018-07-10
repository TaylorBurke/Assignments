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
        default:
            return state;
    }
}

// Action Creators

export const addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        contact
    }
}


const store = createStore(contactReducer);

store.subscribe(() => console.log(store.getState()))

export default store;
