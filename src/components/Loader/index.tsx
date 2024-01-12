import { useAuth } from '../../context/AuthContext'
import './styles.scss'



const Loader = () => {

  const {loader} = useAuth()

  if(loader){
    return(
      <div className="container-loader">
        <h1>Carregando...</h1>
        <div className='loader'>
          <div className="spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
    
  }
}

export default Loader