import { BUY_ICECREAM } from "../Constants/IceCreamConstant";

const initialStateIceCream = {
    loading: false,
    totalIceCream: 25,
    error: ''
}

const iceCreamReducer = (state = initialStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            totalIceCream: state.totalIceCream - 1
        }

        default: return state
    }
}

export default iceCreamReducer