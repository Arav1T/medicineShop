import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReduxApp() {
    const counter = useSelector(state=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
            <p>
                Counter: {counter}
            </p>
            <button onClick={()=>dispatch({type : "increment"})}>Click</button>
    </div>
  )
}

export default ReduxApp