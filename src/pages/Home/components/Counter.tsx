import { useState } from "react"

const Counter = () => {
  const [count, setcount] = useState(0)
  return (
    <div className="text-center flex flex-col items-center space-y-4">
      <h1 className="text-4xl">Counter</h1>
      <div className="flex items-center gap-x-4">
        <button className="text-4xl" onClick={() => setcount(count + 1)}>
          +
        </button>
        <h2 className="text-2xl">{count}</h2>
        <button className="text-4xl" onClick={() => setcount(count - 1)}>
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
