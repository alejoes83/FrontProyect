import React from "react";
import redes from "../imagenes/redes.jpg"

const CompFooter = () => {
    return (

    <div>
        <div className="card-body">
            <h5 className="card-title">Direccion calle 75 #45 - 23 oficina 405</h5>
            <p className="card-text"> e-mail zapatosss@gmail.com - telefono: 601 4956432 - 310 8796234</p>
            <img src = {redes} className="App-logo" alt="logo" width="100" height="72"/>

        </div>
        <div className="card-footer text-muted"> Horario lunes a viernes de 7:00 am - 5:00 pm</div>
    </div>
    )
}

export default CompFooter