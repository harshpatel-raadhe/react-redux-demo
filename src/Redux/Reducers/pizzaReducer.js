import { BUY_PIZZA } from "../Constants/PizzaConstant";

const initialPizza = {
    loading: false,
    numOfPizza: 50,
    error: ''
}

const pizzaReducer = (state = initialPizza, action) => {
    switch (action.type) {
        case BUY_PIZZA:
            return {
                ...state,
                numOfPizza: state.numOfPizza - 1
            }

        default: return state
    }
}

export default pizzaReducer