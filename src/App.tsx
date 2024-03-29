import { Provider } from "react-redux"
import { store } from "./core/redux/store"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/page"
import RootLayout from "./common/layouts/RootLayout"
import UsersPage from "./pages/Users/page"
import UserPage from "./pages/User/page"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserPage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
