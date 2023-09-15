import React from "react";
import BannerImg from "../../assets/img/banner.jpg"
import styled from "styled-components";
import ReactPlayer from "react-player";

const BannerContainer = styled.section`
    display: flex;
    justify-content: space-around;
    position: relative;
`

const ImgBanner = styled.img`
    height: 400px;
    object-fit: cover;
    width: 100%;
`
const BannerDescription = styled.div`
    align-items: center;
    display: flex;
    gap: 30px;
    max-width: 1136px;
    height: 100%;
    padding: 40px;
    position: absolute;
`
const Paragraph = styled.p`
    color: #000;
    text-align: justify;
    width: 600px;
`

const Banner = () => {
    return (
        <BannerContainer>
            <ImgBanner src={BannerImg} alt=""/>

            <BannerDescription>
                <Paragraph>
                    <h1>Programación web</h1>
                    Este challenge es una forma de arendizaje. Es un mecanismo donde podrás 
                    comprometerte en la resolución de un problema para poder aplicar todos 
                    los conocimientos adquiridos en la formación React. Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Explicabo blanditiis eaque nulla. Sapiente quas minima eligendi at officiis 
                    consectetur ea facilis expedita perferendis corporis, reprehenderit voluptatem alias fugit. Cum, illo.
                </Paragraph>

                <ReactPlayer 
                    url={"https://www.youtube.com/watch?v=rnmbxqS1nRo"}
                    width="580px"
                    height="300px"
                    controls
                    playing
                    volume="0.4"
                />
            </BannerDescription>
        </BannerContainer>
    )
}

export default Banner;