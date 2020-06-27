import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    onClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.onClick}>CLick Me</button>
                <h1>{count}</h1>
            </div>
        )
    }
}

export default ClassCounter
