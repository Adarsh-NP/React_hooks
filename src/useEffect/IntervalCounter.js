import React, {useState, useEffect} from 'react'

function IntervalCounter() {

    const [count, setCount] = useState(0)
    const tick = () =>{
        setCount(count+1)
    }

    useEffect(()=> {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [count]) //without count in the dependency array the value won't change
    //this can be alternatively managed by updating the count using the setState method and hence allowing us to leave the dependency array empty
    

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalCounter
