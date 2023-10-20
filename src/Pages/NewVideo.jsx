import React from "react";
import styled from "styled-components";
import FormularioVideos from "../Components/FormularioVideos";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const MainContainer = styled.section`
    max-width: 1136px;
    margin: 0 auto;
    padding: 40px;
`

const NewVideo = () => {
    const [cardVideo, setVideo] = useState([]);

    //Categorias y colores
const [categorias, setCategorias] = useState([
    {
        id: uuidv4(),
        titulo: "Programación",
        colorPrimario: "#6BD1FF",
    },
    {   
        id: uuidv4(),
        titulo: "Front End",
        colorPrimario: "#00C86F",
    },
    {   
        id: uuidv4(),
        titulo: "Data Science",
        colorPrimario: "#FF8C2A",
    },
    {   
        id: uuidv4(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
    },
    {
        id: uuidv4(),
        titulo: "Ux y Diseño",
        colorPrimario: "#DB6EBF",
    },
    {
        id: uuidv4(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
    },
    {
        id: uuidv4(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
    }, 
]);

const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);

    const categoriasActualizadas = categorias.map((categoria) => {
      if(categoria.id === id){
        categoria.colorPrimario = color
      }

      return categoria;
    })

    setCategorias(categoriasActualizadas);
  }

    const registroVideo = (video) => {

        console.log("Nuevo video", video)
        setVideo([...cardVideo, video ])
    }

    return (
        <MainContainer>
            <FormularioVideos 
                categorias ={categorias.map((categoria) => categoria.titulo)}
                registroVideo = {registroVideo}
                actualizarColor = {actualizarColor}

            />
        </MainContainer>
    )
}

export default NewVideo;