import { useAppSelector } from "../../../../../core/redux/store"

const Count = () => {
  const { count } = useAppSelector((state) => state.counter)
  return <h2 className="text-2xl">{count}</h2>
}

export default Count
