import { useAtom } from "jotai"

import counterAtom from "~atoms"

const CounterView = () => {
    const [counter, setCounter] = useAtom(counterAtom);

    const onIncrement = (): void => {
        setCounter((value: number): number => value + 1);
    }

    const onDecrement = (): void => {
        setCounter((value: number): number => value - 1);
    }
  return (
    <div>
      <div>Current count: {counter}</div>
      <button onClick={onIncrement}>Increment counter</button>
      <button onClick={onDecrement}>Decrement counter</button>
    </div>
  )
}

export default CounterView;
