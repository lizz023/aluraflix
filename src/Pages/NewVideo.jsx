import React, { useState } from "react";
import CampoTexto from "../Components/CampoTexto";
import styled from "styled-components";
import Categorias from "../Components/Categorias";
import Button from "../Components/Button";
import { ColorScheme } from "../Variables/ColorScheme";

// import { Button } from "@mui/material";


const MainContainer = styled.section`
    max-width: 1136px;
    margin: 0 auto;
    padding: 40px;
`

const NewVideo = (props) => {

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");


    const manejoEvento = (e) => {
        e.preventDefault()
    }

    return (
        <MainContainer>
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
                    equipos = {props.equipos}
                />
                <CampoTexto
                    id ="description"
                    label ="Descripción"
                    valor = {descripcion}
                    actualizarValor={setDescripcion}
                    required
                />

                <Button backgroundColor={ColorScheme.blue} color ={ColorScheme.white}>
                    Guardar
                </Button>

                

                <Button backgroundColor={ColorScheme.grey} color ={ColorScheme.black}>Limpiar</Button>

                {/* <Button>Guardar</Button>
                <Button variant="contained" size="large">Guardar</Button>
                <Button variant="contained" size="large">Limpiar</Button> */}

                



            
            </form>
        </MainContainer>
    )
}

export default NewVideo;