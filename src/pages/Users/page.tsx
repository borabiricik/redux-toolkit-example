import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../core/redux/store"
import UserCard from "./components/UserCard"
import { getUsers } from "./redux/usersSlice"

const UsersPage = () => {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="px-4">
      <h1 className="py-4 text-4xl">Users</h1>
      {error ? (
        <div>{error}</div>
      ) : (
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {users?.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsersPage
