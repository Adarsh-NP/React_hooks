import React, {useState} from 'react'


function Hookcounte2() {

    const initialCount = 0
    const [count, changeCount] = useState(initialCount)

    return (
        <div>
            <button onClick={()=> changeCount(prevCount=> prevCount+1)}>Increment</button>
            <button onClick={()=>changeCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={()=>{changeCount(initialCount)}}>Reset</button>
            <button onClick={()=>{changeCount(prevCount=>prevCount+5)}}>Increment 5</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Hookcounte2

