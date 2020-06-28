import React, {useState, useEffect} from 'react'

function HookCounter1() {
 
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        console.log('updating doc title');
        
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
           <button onClick={()=>setCount(count+1)}>clicked {count} times</button> 
        </div>
    )
}

export default HookCounter1
