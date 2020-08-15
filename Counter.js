/*eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

const Counter = ({value, onIncrement, onDecrement, onIncrementAsync, onApiCall}) => {
    return (
        <div>
            <button onClick={onApiCall}>
                APICall this.
            </button>
            {' '}
            <button onClick={onIncrementAsync}>
                Increment after 1 second
            </button>
            {' '}
            <button onClick={onIncrement}>
                Increment
            </button>
            {' '}
            <button onClick={onDecrement}>
                Decrement
            </button>
            <hr/>
            <div>
                Clicked: {value} times
            </div>
        </div>
    )
}

export default Counter
