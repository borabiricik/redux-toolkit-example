import { ToastContainer } from "react-toastify"
import { PropsWithChildren } from "react"
import Header from "./sub-components/Header"
import "react-toastify/dist/ReactToastify.css"

interface Props extends PropsWithChildren {}

const RootLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <ToastContainer />
    </div>
  )
}

export default RootLayout
