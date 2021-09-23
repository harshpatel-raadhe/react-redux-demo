import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux/Actions/CakeAction'

function CakeContainer(props) {
    const [cake, setCake] = useState(1)
    const totalCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()
    
    return (
        <div>
            <div>
                <h1>Number Of Cakes Available :- {totalCake} </h1>
                <input type="text" value={cake} onChange={(e) => setCake(e.target.value)} />
                <button onClick={() => { dispatch(buyCake(cake)) }} >Buy {cake} Cake</button>
            </div>
        </div>
    )
}   

export default CakeContainer
