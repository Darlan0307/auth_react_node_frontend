import { Link, useNavigate } from 'react-router-dom'
import LayoutForms from '../../LayoutForms'
import './styles.scss'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FormEvent, useRef, useState } from 'react';
import { Validate } from '../../../utils/Validate';
import { UserType } from '../../../@Types/UserType';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useAuth } from '../../../context/AuthContext';

const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [erros,setErros] = useState<UserType | null>(null)
  const navigate = useNavigate()
  const {setLoader} = useAuth()

  const sendUserApi = async({email,password}:UserType) =>{
    setLoader(true)
    try {
      await api.post("/create",{email,password})

      toast.success("Usuário criado com sucesso!")
      setErros(null)
      navigate("/")
    } catch (error) {

      if (error instanceof AxiosError && error.response?.data.message) {
        toast.error(error.response.data.message);
     }
    }finally{
      setTimeout(()=>{
        setLoader(false)
      },1000)
    }
  }

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault()
    setErros(null)
    const dataUser : UserType = {
      email,
      password,
      confirmPassword
    }

    const objErros = Validate(dataUser)

    if(Object.keys(objErros).length > 0){
      setErros(objErros)
      toast.error("Preencha os campos corretamente.")
      return;
    }

    //  Enviar para o banco de dados
    sendUserApi(dataUser)
  }


  // Animate 
    const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Estilo inicial
    gsap.fromTo(container.current, {
      opacity: 0,
      x:-300
    },{ // Estilo final
      opacity:1,
      x:0,
      ease: "back.inOut",
      duration: .5
    });
  
  }, { scope: container });
  
  

  return (
    <LayoutForms>
      <main className='page-register' ref={container}>
        <div className='apresentation'>
          <h1 className='title'>Sign Up</h1>
          <p className='description'>Crie uma conta gratuitamente para ter acesso as nossas páginas.</p>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <div className='wrap-input'>
            <input 
            type="email" 
            placeholder='Digite seu email...'
            className={erros?.email ? `input error` : `input`}
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />
            <span><MdEmail/></span>
            {erros?.email && (
              <small className='msg-error'>{erros.email}</small>
            )}
          </div>
          <div className='wrap-input'>
            <input 
            type="password" 
            placeholder='Crie uma senha...'
            className={erros?.password ? `input error` : `input`}
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
            <span><RiLockPasswordFill/></span>
            {erros?.password && (
              <small className='msg-error'>{erros.password}</small>
            )}
          </div>
          <div className='wrap-input'>
            <input 
            type="password" 
            placeholder='Confirme a senha...'
            className={erros?.confirmPassword ? `input error` : `input`}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            value={confirmPassword}
            />
            <span><RiLockPasswordFill/></span>
            {erros?.confirmPassword && (
              <small className='msg-error'>{erros.confirmPassword}</small>
            )}
          </div>
          <button type='submit' className='button'>Register</button>
        </form>
        <p className='sugestao'>OU</p>
        <p className='content-link'>
          Ja tem uma conta? <Link to="/" className='link'>Faça login</Link>
        </p>
      </main>
    </LayoutForms>
  )
}

export default Register