import { BUY_SANDWICH } from "../Constants/SandwichConstant";

const initialState = {
    loading: false,
    numOfSandwich: 30,
    error: ''
}

const sandwichReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_SANDWICH: return {
            ...state,
            numOfSandwich: state.numOfSandwich - 1
        }


        default: return state
    }
}

export default sandwichReducer