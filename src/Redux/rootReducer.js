import { combineReducers } from 'redux';
import cakeReducer from '../Redux/Reducers/CakeReducer'
import iceCreamReducer from './Reducers/IceCreamReducer';
import pizzaReducer from './Reducers/pizzaReducer';
import sandwichReducer from './Reducers/SandwichReducer';
import userReducer from './Reducers/UserReducer';

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    pizza : pizzaReducer,
    sandwich : sandwichReducer,
    user: userReducer
})

export default rootReducer