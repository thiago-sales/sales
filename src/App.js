import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Ingles from './components/Ingles';
import Espanhol from './components/Espanhol';
import Violino from './components/Violino';
import Violao from './components/Violao';
import Canto from './components/Canto';
import FlautaDoce from './components/FlautaDoce';
import './App.css';


function Router(){
  return(
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='ingles' element={<Ingles />} />
          <Route path='espanhol' element={<Espanhol />} />
          <Route path='violino' element={<Violino />} />
          <Route path='violao' element={<Violao />} />
          <Route path='canto' element={<Canto />} />
          <Route path='flautadoce' element={<FlautaDoce />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contato' element={<Contato />} />
          <Route path='sobre' element={<Sobre />} />
          </Route>
      </Routes>
      </BrowserRouter>
  );
}



function App() {
  return (
    <div className="App">

        <Router/>

   </div>
  );
}



export default App;
