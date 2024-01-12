import { toast } from 'react-toastify'
import { useAuth } from '../../../context/AuthContext'
import './styles.scss'
import { api } from '../../../services/api'
import { useState } from 'react'
import { UserType } from '../../../@Types/UserType'

const Home = () => {
  const [users,setUsers] = useState<UserType[] | null>(null)
  const {signOut,setLoader} = useAuth()

  const listerUsers = async() => {
    setLoader(true)
    try {
      const response = await api.get("/users")

      setUsers(response.data.users);
      
    } catch (error) {
      toast.warn("Não foi possivel acessar o banco de dados")
      toast.warn("tente sair da conta e entrar de novo")
    }finally{
      setTimeout(()=>{
        setLoader(false)
      },1000)
    }
  }

  return (
    <main className='page-home'>
      <h1>Você está logado!</h1>
      <section className='config'>
        <div className='option'>
          <h3>Click aqui para listar todos os Usuários</h3>
          <button 
          onClick={listerUsers}
          className='lister'>Listar</button>
        </div>
        <div className='option'>
          <h3>Click aqui para sair da sua conta</h3>
          <button 
          onClick={signOut}
          className='signout'>SignOut</button>
        </div>
      </section>

      {users && (
        <div className='qtdUsers'>
        <h3>Quantidade total de usuários: {users.length}</h3>
      </div>
      )}

      {
        users && (
          <div className='container-users'>
        {users?.map((user)=>(
          <article key={user.id} className='card-user'>
            <h3><span>ID:</span>{user.id}</h3>
            <p><span>E-mail:</span> {user.email}</p>
          </article>
        ))}
      </div>
        )
      }
    </main>
  )
}

export default Home