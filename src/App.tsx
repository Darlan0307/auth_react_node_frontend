import AppRouter from "./components/AppRouter"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from "./context/AuthContext"
function App() {

  return (
    <AuthProvider>
      <>
        <ToastContainer autoClose={2500} position={toast.POSITION.BOTTOM_LEFT}/>
          <AppRouter/>
      </>
    </AuthProvider>
  )
}

export default App
