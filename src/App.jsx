
import './App.css';
import CompCrearCliente from './Componentes/CompCrearCliente';
import CompEditarCliente from './Componentes/CompEditarCliente';
import CrearProducto from './Componentes/CrearProducto';


//importamos los componentes
import CompMostrarClientes from './Componentes/CompMostrarCliente';
import MostrarProductos from './Componentes/MostrarProducto';
import EditarProducto from './Componentes/EditarProducto';
import CompFooter from './Componentes/footer';

// Importamos Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
   <div className='App'>
    <header className='container'>
    
<nav className="navbar bg-primary">
  <div className="container-fluid">
    <a href= "Login" className="navbar-brand"> LOGIN</a>

    <button
      aria-controls="navbarNav"
      aria-expanded="true"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarNav"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link active" href="/"> Home</a></li>
        <li className="nav-item"><a className="nav-link active" href="/clientes">Clientes</a></li>
        <li className="nav-item"><a className="nav-link" href="/productos">Productos</a></li>
        <li className="nav-item"><a aria-disabled="true" className="nav-link disabled">Disabled</a></li>
      </ul>
    </div>
  </div>
</nav>

    </header>
    <BrowserRouter>
    <Routes>
      <Route path ='/clientes/' element={<CompMostrarClientes />}/>
      <Route path ='/clientes/agregar/' element={<CompCrearCliente />}/>
      <Route path ='/clientes/editar/:id' element={<CompEditarCliente />}/>
      
      <Route path ='/productos/' element={<MostrarProductos />}/>
      <Route path ='/productos/agregar/' element={<CrearProducto />}/>
      <Route path ='/productos/editar/:id' element={<EditarProducto />}/>
      
    </Routes>
    </BrowserRouter>
    <CompFooter/>
   </div>
  )
}

export default App
