import React from "react"
import { useAppDispatch } from "../../../../../core/redux/store"
import { decrement } from "../../../redux/counterSlice"

const DecrementButton = () => {
  const dispatch = useAppDispatch()
  return (
    <button className="text-4xl" onClick={() => dispatch(decrement())}>
      -
    </button>
  )
}

export default DecrementButton
