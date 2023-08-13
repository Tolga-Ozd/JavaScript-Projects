import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"
import { clear, decrement, increment } from "../../Store/counterReducer"

const Counter = () => {
// !global statein tüketilmesi
  const count = useSelector((state) =>state.count)

//! useDispatch  custom redux hookudur.
  const dispatch = useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive"
        //  onClick={()=>dispatch({type: "INC"})}
         onClick={()=>dispatch(increment())}
         >
          increase
          </button>
         

        <button className="counter-button zero"
        // onClick={()=>dispatch({type: "CLR"})}
        onClick={()=>dispatch(clear())}
        >
          reset</button>

        <button className="counter-button negative"
        // onClick={()=>dispatch({type: "DEC"})}
        onClick={()=>dispatch(decrement())}
        >
          decrease</button>
      </div>
    </div>
  )
}

export default Counter
