import { MenuItem, TextField } from "@mui/material";
import React from "react";


const Categorias = (props) => {

    const categorias = [
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
    
            {categorias.map((categoria, index) => (
                <MenuItem key={index} value={categoria} >
                {categoria}
                </MenuItem>
          ))}

        </TextField>

        

    )
}

export default Categorias;