//Esta página insere os conteudos dos componentes
//em todas as páginas, tais como um menu de navegação.
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () =>{
    return(
        <>
          <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
  <Link to='/' className='link-nav'>
    <a class="navbar-brand" id='link-nav'>Prof. Thiago</a>
    </Link>

    
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon" className='toggler'></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to='/' className='link-nav'>
          <a class="nav-link active" aria-current="page" id='link-nav'>Home</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to='/ingles' className='link-nav'>
          <a class="nav-link" id='link-nav'>Inglês</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to='/espanhol' className='link-nav'>
          <a class="nav-link" id='link-nav'>Espanhol</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to='/sobre' className='link-nav'>
          <a class="nav-link" id='link-nav'>Sobre</a>
          </Link>
        </li>
        <li class="nav-item">
            <Link to='/blog' className='link-nav'>
          <a class="nav-link" id='link-nav'>Blog</a>
          </Link>
        </li>
        <li class="nav-item">
            <Link to='/contato' className='link-nav'>
          <a class="nav-link" id='link-nav'>Contato</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>  







            <Outlet/>
        </>
    );
}


export default Layout;