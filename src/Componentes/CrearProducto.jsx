import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const URL2 = 'http://localhost:5000/api/productos/';

const CrearProducto =() => {

    const [ producto, setProducto] = useState('');
    const [ referencia, setReferencia] = useState('');
    const [ talla, setTalla] = useState('');
    const [ color, setColor] = useState('');
    const [ estilo, setEstilo] =useState('');
    const navigate = useNavigate();

    //crear funcion guardar
    const guardarProducto  = async(e) =>{
        e.preventDefault();
        await axios.post(URL2, {
            producto:producto, referencia:referencia, talla:talla, color:color, 
            estilo:estilo 
        })
        navigate('/productos')
    }

    return (

        <div>
            <h3>Formulario agregar producto</h3>
            <form onSubmit={guardarProducto}>
                <div className="mb-3">
                <label className="form-label">Nombre producto</label>
                <input value = {producto} onChange={(e) => setProducto(e.target.value) }
                type = 'text' className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label">referencia producto</label>
                <input value = {referencia} onChange={(e) => setReferencia(e.target.value) }
                type = 'text' className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label">Talla producto</label>
                <input value = {talla} onChange={(e) => setTalla(e.target.value) }
                type = 'number' className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label">Color producto</label>
                <input value = {color} onChange={(e) => setColor(e.target.value) }
                type = 'text' className="form-control"/>
                </div>

                <div className="mb-3">
                <label className="form-label">Estilo producto</label>
                <input value = {estilo} onChange={(e) => setEstilo(e.target.value) }
                type = 'text' className="form-control"/>
                </div>

                
                <button type="submit" className="btn btn-success btn-lg"><i className="fa-regular fa-floppy-disk"></i></button>


            </form>
        </div>
    )
}

export default CrearProducto;