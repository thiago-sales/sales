import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import './App.css';


function Router(){
  return(
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
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
