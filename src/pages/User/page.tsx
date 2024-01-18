import { useParams } from "react-router-dom"
import CompanyCard from "./components/CompanyCard"
import { useAppDispatch, useAppSelector } from "../../core/redux/store"
import { useEffect } from "react"
import { getSingleUser } from "../Users/redux/usersSlice"

const UserPage = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const id = params.id as string
  const { currentUser: user } = useAppSelector((state) => state.users)
  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [dispatch, id])

  if (user) {
    return (
      <div className="container mx-auto flex flex-col items-center gap-x-8 gap-y-4 md:flex-row md:items-start md:gap-y-0 py-4">
        <div className="shrink-0">
          <div className="flex flex-col space-y-4 py-4">
            <img
              src={user.image}
              className="h-40 w-40 rounded-full border-4 border-gray-700"
              alt=""
            />
          </div>
          <p className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm font-bold text-gray-400">
            {user.company.title}
          </p>
        </div>
        <div className="flex flex-col-reverse items-center gap-y-4 md:flex-row md:items-start md:gap-y-0">
          <CompanyCard company={user.company} />
        </div>
      </div>
    )
  }
  return <p>Loading...</p>
}

export default UserPage
