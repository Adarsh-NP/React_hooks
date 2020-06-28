import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             msg: ''
        }
    }

    onClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
            msg:  'incremented'
        }), ()=>alert(this.state.msg +"\n" + this.state.count)) //yayyy that's an achievement lmao, without the arrow function the alert shows prevState value
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.onClick}>Click Me</button>
                <h1>{count}</h1>
                
            </div>
        )
    }
}

export default ClassCounter
