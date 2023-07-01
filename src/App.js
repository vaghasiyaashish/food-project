import React from 'react';
import Layout from './component/layout/layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './food/home';
import About  from './food/about';
import Contect from './food/contect';
import Menu from './food/menu';
import Pagenotfound from './food/pagenotfound';
// import './App.css';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>      
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/contact' element={<Contect/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='*' element={<Pagenotfound/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
