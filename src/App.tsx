import AppRouter from "./components/AppRouter"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
function App() {

  return (
    <>
      <ToastContainer autoClose={2500} position={toast.POSITION.BOTTOM_LEFT}/>
      <AppRouter/>
    </>
  )
}

export default App
