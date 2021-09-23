import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyPizza } from '../Redux/Actions/PizzaAction'

function PizzaContainer() {
    const numOfPizza = useSelector(state =>
        state.pizza.numOfPizza
    )
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num of Pizza Available :- {numOfPizza}</h1>
            <button onClick={() => dispatch(buyPizza())} >Buy Pizza</button>
        </div>
    )
}

export default PizzaContainer
