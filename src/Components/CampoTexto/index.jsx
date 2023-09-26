import { TextField} from "@mui/material";
import React from "react";

const CampoTexto = (props) => {

    
    const { type = "text"} = props;

    const recibirValor = (e) => {
        props.actualizarValor(e.target.value)
    }
    
    return (
        <div>
            <TextField
                id= {props.title}
                label= {props.label}
                required = {props.required}
                variant="outlined" 
                value={props.valor}
                onChange={recibirValor}
                fullWidth
                margin='normal'
                type={type}
            />

            
           
        </div>
    )
}

export default CampoTexto;