import React from "react";
import styled from "styled-components";
import FormularioVideos from "../Components/FormularioVideos";
import { useState } from "react";


const MainContainer = styled.section`
    max-width: 1136px;
    margin: 0 auto;
    padding: 40px;
`

const categorias = [
    {
    
    titulo: "Programación",
    colorPrimario: "##6BD1FF",
    colorSecundario: "#D9F7E9"
    },
    {
    
    titulo: "Front End",
    colorPrimario: "#00C86F",
    colorSecundario: "#E8F8FF"
    },
    {
    
    titulo: "Data Science",
    colorPrimario: "#FF8C2A",
    colorSecundario: "#F0F8E2"
    },
    {
    
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
    },
    {
    
    titulo: "Ux y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
    },
    {
    
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
    },
    {
    
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
    }, 
];


const NewVideo = () => {
    const [cardVideo, setVideo] = useState([]);

    const registroVideo = (video) => {

        console.log("Nuevo video", video)
        setVideo([...cardVideo, video ])
    }

    return (
        <MainContainer>
            <FormularioVideos 
                categorias ={categorias.map((categoria) => categoria.titulo)}
                registroVideo = {registroVideo}

            />
        </MainContainer>
    )
}

export default NewVideo;