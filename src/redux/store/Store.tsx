// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//     reducer:
    
// })
import {createStore} from "redux"


export const counterReducer = (state={counter: 0},action)=>{
    if(action.type === "increment"){
        return {
            counter : state.counter + 1
        }
    }
    return state
}
const Store =createStore(counterReducer)
export default Store