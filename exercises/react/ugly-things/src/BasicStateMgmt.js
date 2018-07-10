// this is not a component, it is a reference for hoomans
// we have made a basic statemanagment system to understand redux

const store = {
    state: undefined,
    getState: function (reducer) {
        return reducer(this.state, { type: "GET_STATE" });
    },
    dispatch: function (action, reducer) {
        this.state = reducer(this.state, action);
    }
}

const initialState = { counter: 0 };

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: prevState.counter + action.incrementBy
            }
        case "RESET":
            return {
                counter: 0
            }
        default:
            return prevState;
    }
}

console.log(store.getState(reducer));

//ACTION CREATOR
const increment = (incrementBy) => {
    //THE OBJECT IS THE ACTION
    return { type: "INCREMENT", incrementBy};
}

const reset = () => {
    return { type: "RESET"};
}

store.dispatch(increment(-939375634510), reducer);

console.log(store.getState(reducer));

store.dispatch(reset(), reducer);

console.log(store.getState(reducer));

