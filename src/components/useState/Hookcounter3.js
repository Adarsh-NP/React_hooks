import React, {useState} from 'react'

function Hookcounter3() {

    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e=> setName({...name, firstName:e.target.value})}></input>
                <input type='text' value={name.lastName} onChange={e=>setName({...name, lastName: e.target.value})}></input>
                <h2>Your first name: {name.firstName}</h2>
                <h2>Your last name: {name.lastName}</h2>
            </form>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}
//without ...name, which is spreading the name, the state is not managed properly

export default Hookcounter3
