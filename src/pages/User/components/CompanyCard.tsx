import { User } from "../../Users/types/users"

type Props = {
  company: User["company"]
}

const CompanyCard = ({ company }: Props) => {
  return (
    <div className="flex-1 rounded-xl border border-gray-500 px-4 py-2">
      <p className="text-lg font-bold">{company.title}</p>
      <p className="text-sm font-bold text-gray-400">{company.department}</p>
      <p className="text-sm font-bold text-gray-400">
        {company.address.address}
      </p>
    </div>
  )
}

export default CompanyCard
