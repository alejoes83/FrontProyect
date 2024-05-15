import axios from'axios';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const URL = 'http://localhost:5000/api/clientes/';

const CompMostrarClientes = () => {

    const [clientes, setClientes] = useState([])
    
    useEffect(() => {
        getClientes()
    }, []);

//funccion para mostrar los clientes
const getClientes = async() => {
    const resul = await axios.get(URL)
    setClientes(resul.data);
}

//funcion eliminar clientes
const eliminarClientes = async (id) => {
    await axios.delete(`${URL}${id}`)
    getClientes();
}

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/clientes/agregar/' className='btn btn-primary btn-lg mt-4 mb-4'><i className="fa-regular fa-address-card"></i> </Link>
                    <table className="table table-success table-striped-columns">
                        <thead className='table-light'>
                            <tr>
                                <th>Nombres Cliente</th>
                                <th>Apellidos Cliente</th>
                                <th>Cedula</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key = {index}>
                                    <td> {cliente.nombres}</td>
                                    <td> {cliente.apellidos}</td>
                                    <td> {cliente.cedula}</td>
                                    <td> {cliente.correo}</td>
                                    <td> {cliente.telefono}</td>
                                    <td> {cliente.direccion}</td>
                                    <td>
                                    <Link to= {`/clientes/editar/${cliente._id}`} className='btn btn-dark mt-2 mb-2'><i className="fa-solid fa-user-pen"></i> </Link>
                                    <button onClick={()=> eliminarClientes(cliente._id)} className="btn btn-warning"><i className="fa-solid fa-user-minus"></i></button>
                                                                        
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

export default CompMostrarClientes;