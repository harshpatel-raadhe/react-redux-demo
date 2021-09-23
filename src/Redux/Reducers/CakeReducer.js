import { BUY_CAKE } from "../Constants/CakeConstant";

const initialState = {
    loading : false,
    numOfCake:20,
    error: ''
}


const cakeReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCake: state.numOfCake - action.payload
        }
    
        default: return state;
    }
}

export default cakeReducer