import './styles.scss'

const Home = () => {
  return (
    <main className='page-home'>
      <h1>Você está logado!</h1>
      <section className='config'>
        <div className='option'>
          <h3>Click aqui para listar todos os Usuários</h3>
          <button className='lister'>Listar</button>
        </div>
        <div className='option'>
          <h3>Click aqui para sair da sua conta</h3>
          <button className='signout'>SignOut</button>
        </div>
        
      </section>

    </main>
  )
}

export default Home