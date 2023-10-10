import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoCard = () => {

    // const {colorPrimario, colorSecundario, titulo} = props.datos

    // const borderCard = {
    //     border: colorSecundario
    // }

    // const CardContainer = styled.div`
       
    //     @media (min-width: 1136px){
    //         width: 250px;
    //     }

    //     @media (min-width: 768px){
    //         width: 200px;
    //     }

    //     @media (min-width: 360px){
    //         width: 250px;
    //     }
        
      
    // `

    return (
        <section id="lojshs">
            <Link to={"/newVideo"}>

                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE="
                                alt="green iguana"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Eliza
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur a
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                
            </Link>
           
        </section>
    )
}

export default VideoCard;