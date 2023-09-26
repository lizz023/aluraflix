import { MenuItem, TextField } from "@mui/material";
import React from "react";


const Categorias = (props) => {

    const equipos = [
        "Programación",
        "Fron End",
        "Data Science",
        "Devops",
        "UX y diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambios = (e) => {
        props.actualizarCategoria(e.target.value);
    }

    return (
        <TextField
            fullWidth
            id="categoria"
            label = "Selecciona una categoria"
            select
            required
            value={props.valor}
            onChange={manejarCambios}
            margin="normal"
        >
    
            {equipos.map((equipo, index) => (
                <MenuItem key={index} value={equipo} >
                {equipo}
                </MenuItem>
          ))}

        </TextField>

        

    )
}

export default Categorias;