import classNames from "classnames"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav
        className={classNames(
          "flex items-center justify-between",
          "container mx-auto px-4 py-6 md:max-w-[60%] md:px-0"
        )}
      >
        <Link to={"/"}>
          <h1 className="text-3xl">Redux Toolkit Example</h1>
        </Link>
        <ul className="flex items-center gap-x-4 text-xl font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
