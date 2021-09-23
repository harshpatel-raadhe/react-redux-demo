import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import buySandwich from '../Redux/Actions/SandwichAction'

function SandwichContainer() {
    const numOfSandwich = useSelector(state => state.sandwich.numOfSandwich)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num of Sandwich Available :- {numOfSandwich}</h1>
            <button onClick={() => dispatch(buySandwich())} >Buy Sandwich</button>
        </div>
    )
}

export default SandwichContainer
