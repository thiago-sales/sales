//Esta página insere os conteudos dos componentes
//em todas as páginas, tais como um menu de navegação.
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () =>{
    return(
        <>
          <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
  <Link to='/' className='link-nav'>
    <a class="navbar-brand" id='link-nav'>Prof. Thiago</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-lablledly="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
        <Link to='/violino' className='link-nav'>
          <a class="nav-link" id='link-nav'>Violino</a>
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
  </div>
</nav>  







            <Outlet/>
        </>
    );
}


export default Layout;