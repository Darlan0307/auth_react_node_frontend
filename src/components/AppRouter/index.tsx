import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
        
        <Route path="/home" element={<PrivateRouter/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>

        <Route path="*" element={<h1 style={{color:"white"}}>Page not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter