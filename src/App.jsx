import { Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import './i18n'
import MyComponent from "./views/Demo/Demo"


function App() {

  return (
    <>
    <Routes>
      <Route element={<Home />} path="/"/>
      <Route element={<MyComponent />} path="home"/>
    </Routes>
    </>
  )
}

export default App
