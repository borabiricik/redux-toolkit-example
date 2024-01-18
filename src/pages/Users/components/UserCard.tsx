import { Link } from "react-router-dom"
import { User } from "../types/users"

type Props = {
  user: User
}

const UserCard = ({ user }: Props) => {
  return (
    <Link to={`/users/${user.id}`}>
      <div className="flex flex-col items-stretch overflow-hidden rounded-lg border border-gray-400">
        <div className="w-full">
          <img className="w-full " src={user.image} alt="" />
        </div>
        <div className="flex flex-col p-4">
          <p className="text-xl">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-gray-500">{user.address.city}</p>
        </div>
      </div>
    </Link>
  )
}

export default UserCard
