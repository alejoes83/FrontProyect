import axios from'axios';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

//const URL2 = 'http://localhost:5000/api/productos/';
const URL2 = 'https://talento-tech.onrender.com/api/productos/';

const MostrarProductos = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        getProductos()
    }, []);

//funccion para mostrar los clientes
const getProductos = async() => {
    const resul = await axios.get(URL2)
    setProductos(resul.data);
}

//funcion eliminar clientes
const eliminarProducto = async (id) => {
    await axios.delete(`${URL2}${id}`)
    getProductos();
}

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/productos/agregar/' className='btn btn-primary btn-lg mt-5 mb-5'>Nuevo producto
                        <i className="fa-solid fa-file-circle-plus"></i> </Link>
                    <table className="table table-success table-striped-columns">
                        <thead className='table-light'>
                            <tr>
                                <th>Nombre Producto</th>
                                <th>Referencia producto</th>
                                <th>Talla</th>
                                <th>Color</th>
                                <th>Estilo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) => (
                                <tr key = {index}>
                                    <td> {producto.producto}</td>
                                    <td> {producto.referencia}</td>
                                    <td> {producto.talla}</td>
                                    <td> {producto.color}</td>
                                    <td> {producto.estilo}</td>
                                    <td>
                                    <Link to= {`/productos/editar/${producto._id}`} className='btn btn-dark mt-2 mb-2'><i className="fa-solid fa-file-pen"></i> </Link>
                                    <button onClick={()=> eliminarProducto(producto._id)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                                                                        
                                    </td>
                                
                                </tr>
                            ))}

                        </tbody>
                    </table> 

                </div>
            </div>
        </div>


    )
}

export default MostrarProductos;