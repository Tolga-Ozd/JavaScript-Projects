import {createStore , combineReducers} from "redux"
import { counterReducer } from "./counterReducer"
import { todoReducer } from "./todoReducer"

// ! store u oluşturduk
// export const store = createStore(counterReducer)

const rootReducer = combineReducers({
    counterReducer,
    todoReducer,
})

export const store = createStore(rootReducer)

