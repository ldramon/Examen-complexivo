import Componente from './component/Component'; 

import './App.css'; 
import HeaderComponent from './component/HeaderComponent'; 
import FooterComponent from './component/FooterComponent'; 
import TopBarComponent from './component/TopBarComponent'; 
import AddComponent from './component/AddComponent';  

import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() { 
  return ( 
    <div> 
      <BrowserRouter> 
      <TopBarComponent/> 
        <div className='container'><br/> 
          <HeaderComponent/>        
          <Routes> 
            <Route exact path='/' element={<Componente/>}></Route>  
            <Route path='/listar' element={<Componente/>}></Route>  
            <Route path='/crear' element={<AddComponent/>}></Route> 
            <Route path='/actualizar/:id_inmuebles' element={<AddComponent/>}></Route> 
            <Route path='/eliminar/:id_inmuebles' element={<AddComponent/>}></Route> 
          </Routes> 
        </div> 
        <FooterComponent/> 
      </BrowserRouter> 
    </div> 
  ); 
} 

export default App; 
