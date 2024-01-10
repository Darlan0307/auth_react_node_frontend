import { Link } from 'react-router-dom'
import LayoutForms from '../../LayoutForms'
import './styles.scss'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const Register = () => {
  return (
    <LayoutForms>
      <main className='page-register'>
        <div className='apresentation'>
          <h1 className='title'>Sign Up</h1>
          <p className='description'>Faça login para ter acesso as nossas páginas e recursos.</p>
        </div>
        <form className='form'>
          <div className='wrap-input'>
            <input 
            type="email" 
            placeholder='Digite seu email...'
            className='input'
            />
            <span><MdEmail/></span>
          </div>
          <div className='wrap-input'>
            <input 
            type="password" 
            placeholder='Crie uma senha...'
            className='input'
            />
            <span><RiLockPasswordFill/></span>
          </div>
          <div className='wrap-input'>
            <input 
            type="password" 
            placeholder='Confirme a senha...'
            className='input'
            />
            <span><RiLockPasswordFill/></span>
          </div>
          <button type='submit' className='button'>Register</button>
        </form>
        <p className='sugestao'>OU</p>
        <p className='content-link'>
          Ja tem uma conta? <Link to="/login" className='link'>Faça login</Link>
        </p>
      </main>
    </LayoutForms>
  )
}

export default Register