import React from "react"
import { useAppDispatch } from "../../../../../core/redux/store"
import { increment } from "../../../redux/counterSlice"

const IncrementButton = () => {
  const dispatch = useAppDispatch()
  return (
    <button className="text-4xl" onClick={() => dispatch(increment())}>
      +
    </button>
  )
}

export default IncrementButton
