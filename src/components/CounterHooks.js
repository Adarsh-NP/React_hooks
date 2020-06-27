import React, {useState} from 'react'


function CounterHooks() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <h1>{count}</h1>
        </div>
    )
}

export default CounterHooks

//never call hooks from loops, conditions, functions, etc. Always call from top level
//not to forget, these are to be used only in the class components
