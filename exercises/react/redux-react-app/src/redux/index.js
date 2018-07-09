import { createStore } from 'redux'

export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}

export const subOne = () => {
    return {
        type: "SUB_ONE"

    }
}

export const timesTwo = () => {
    return {
        type: "TIMES_BY_TWO"
    }
}

export const divTwo = () => {
    return {
        type: "DIVIDE_BY_TWO"
    }
}

export const changeNum = num => {
    return {
        type: "CHANGE_NUM",
        num
    }
}

// DISPATCH

// Reducer
const reducer = (state = { num: 0 }, action) => {
    switch (action.type) {
        case "ADD_ONE":
            return {
                num: state.num + 1
            }
        case "SUB_ONE":
            return {
                num: state.num - 1
            }
        case "TIMES_BY_TWO":
            return {
                num: state.num * 2
            }
        case "DIVIDE_BY_TWO":
            return {
                num: state.num / 2
            }
        case "CHANGE_NUM":
            return {
                num: action.num
            }
        default:
            return state
    }
}


export default createStore(reducer);