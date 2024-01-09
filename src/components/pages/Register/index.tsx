import { Link } from 'react-router-dom'
import LayoutForms from '../../LayoutForms'
import './styles.scss'

const Register = () => {
  return (
    <LayoutForms>
      <main className='page-register'>
        <h1 className='title'>Sign Up</h1>
        <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, mollitia?</p>
        <form className='form'>
          <div className='wrap-input'>
            <input 
            type="email" 
            placeholder='Digite seu email...'
            className='input'
            />
            <span>icon</span>
          </div>
          <div className='wrap-input'>
            <input 
            type="password" 
            placeholder='Crie uma senha...'
            className='input'
            />
            <span>icon</span>
          </div>
          <div className='wrap-input'>
            <input 
            type="password" 
            placeholder='Confirme a senha...'
            className='input'
            />
            <span>icon</span>
          </div>
          <button type='submit'>Register</button>
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