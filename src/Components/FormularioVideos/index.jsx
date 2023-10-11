// import {Button} from "@mui/material";
import CampoTexto from "../CampoTexto";
import { useState } from "react";
import Categorias from "../Categorias";
import Button from "../Button";
import { ColorScheme } from "../../Variables/ColorScheme";


const FormularioVideos= (props) => {

 

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");


    const manejoEvento = (e) => {
        e.preventDefault();

        let datosEnviar = {
            title,
            link,
            categoria,
            descripcion
        }
       console.log(datosEnviar);
    }

    return (
        <form onSubmit={manejoEvento}>
            <h3>Nuevo Video</h3>
            <CampoTexto
                id = "Title"
                label = "Titulo"
                valor = {title}
                actualizarValor = {setTitle}
                required
            />
            <CampoTexto
                id = "linkVideo"
                label = "Link del video"
                valor = {link}
                actualizarValor ={setLink}
                required
            />
            <Categorias
                valor={categoria}
                actualizarCategoria ={setCategoria}
                categorias = {props.categorias}
            />
            <CampoTexto
                id ="description"
                label ="Descripción"
                valor = {descripcion}
                actualizarValor={setDescripcion}
                required
            />

            {/* <Button variant="contained" color="primary" size="large">
                Guardar
            </Button>

            <Button variant="contained" color="inherit" size="large">
                Limpiar
            </Button> */}

            
            <Button backgroundColor={ColorScheme.blue} color ={ColorScheme.white}>
                Guardar
            </Button>

            <Button backgroundColor={ColorScheme.grey} color ={ColorScheme.black}>
                Limpiar
            </Button>

           
                
          

        </form>
    )
}

export default FormularioVideos;