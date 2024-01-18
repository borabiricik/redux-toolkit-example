import Count from "./sub-components/Count"
import DecrementButton from "./sub-components/DecrementButton"
import IncrementButton from "./sub-components/IncrementButton"

const CounterRedux = () => {
  return (
    <div className="text-center flex flex-col items-center space-y-4">
      <h1 className="text-4xl">Counter</h1>
      <div className="flex items-center gap-x-4">
        <IncrementButton />
        <Count />
        <DecrementButton />
      </div>
    </div>
  )
}

export default CounterRedux
