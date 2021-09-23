import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIcecream } from '../Redux/Actions/IceCreamAction'

function IceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.totalIceCream)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Num of IceCream Available :- {numOfIceCream}</h1>
            <button onClick={() => {dispatch(buyIcecream())}} >Buy Icecream</button>
        </div>
    )
}

export default IceCreamContainer
