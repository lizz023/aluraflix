import React from "react";

import Banner from "../Components/Banner";

import SlideRemote from "../HomeCarrousel/Slider";
import FormularioVideos from "../Components/FormularioVideos";


const Home = () => {

    //Lista categorias
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
    return (
        <main>
            <Banner/>
            
            {
                categorias.map((categoria ) => <SlideRemote 
                    datos={categoria} 
                    key={categoria.titulo}

               
                // colaboradores={colaboradores.filter(colaborador => colaborador.video === video.titulo)}
                // eliminarColaborador={eliminarColaborador}
                // actualizarColor={actualizarColor}
                // like={like}
                />
                )
            },

         
        </main>
    )
}

export default Home; 