import React, {useState, useEffect} from 'react'
import HookMounts from './HookMounts'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Display</button>
            {display && <HookMounts /> }
        </div>
    )
}

export default MouseContainer
