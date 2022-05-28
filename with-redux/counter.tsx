import { useDispatch, useSelector } from "react-redux"

import { CounterState, decrement, increment } from "~counter-slice"

export const CounterView = () => {
  const dispatch = useDispatch()
  const value = useSelector((state: CounterState) => state.count)

  return (
    <div>
      <div>Current count: {value}</div>
      <button onClick={() => dispatch(increment())}>Increment counter</button>
      <button onClick={() => dispatch(decrement())}>Decrement counter</button>
    </div>
  )
}
