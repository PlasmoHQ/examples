import { decrement, increment } from "~counter-slice"
import { useAppDispatch, useAppSelector } from "~store"

export const CounterView = () => {
  const dispatch = useAppDispatch()

  // Make sure to use "useAppSelector" instead of "useSelector" to automatically get the correct types
  const value = useAppSelector((state) => state.counter.count)

  return (
    <div>
      <div>Current count: {value}</div>
      <button onClick={() => dispatch(increment())}>Increment counter</button>
      <button onClick={() => dispatch(decrement())}>Decrement counter</button>
    </div>
  )
}
