import { Link } from 'react-router-dom'
import LayoutForms from '../../LayoutForms'
import './styles.scss'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';



const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isError,setIsError] = useState(false)


  // Animate
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Estilo inicial
    gsap.fromTo(container.current, {
      opacity: 0,
      x:300
    },{ // Estilo final
      opacity:1,
      x:0,
      ease: "back.inOut",
      duration: .5
    });
  
  }, { scope: container });

  return (
    <LayoutForms>
        <main className='page-login' ref={container}>
          <div className='apresentation'>
            <h1 className='title'>Sign In</h1>
            <p className='description'>Faça login para ter acesso aos nossos serviços e recursos.</p>
          </div>
          <form className='form'>
            <div className='wrap-input'>
              <input 
              type="email" 
              placeholder='Digite o seu email...'
              className='input'
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              />
              <span><MdEmail/></span>
            </div>
            <div className='wrap-input'>
              <input 
              type="password" 
              placeholder='Digite a sua senha...'
              className='input'
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              />
              <span><RiLockPasswordFill/></span>
            </div>
            <button type='submit' className='button'>Login</button>
          </form>
          <p className='sugestao'>OU</p>
          <p className='content-link'>
            Não tem uma conta? <Link to="/register" className='link'>Crie agora!</Link>
          </p>
        </main>
    </LayoutForms>
  )
}

export default Login