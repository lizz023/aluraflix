import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = () => {

    // const {colorPrimario, colorSecundario, titulo} = props.datos

    // const borderCard = {
    //     border: colorSecundario
    // }

    return (
        <section>
            <Link to={"/newVideo"}>
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
            </Link>
           
        </section>
    )
}

export default VideoCard;