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
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    max-width: 1136px;
    height: 100%;
    padding: 40px;
    position: absolute;

    @media (min-width: 1136px) {
        flex-wrap: nowrap;
        padding: 40px;
    }

    @media (min-width: 768px) {
        flex-wrap: nowrap;
    }
`
const Paragraph = styled.p`
    color: #000;
    text-align: justify;
    max-width: 100%;

    @media (min-width: 1136px){
        font-size: 13px;
        max-width: 50%;
    }

    @media (min-width: 768px){
        
        max-width: 50%;
    }
`
const Player = styled.div`

    @media (min-width:360px) {
        display: none;
    }

    @media (min-width:768px) {
        display: flex;
    }

    @media (min-width:1136px) {
        display: flex;
    }
`

const Banner = () => {
    return (
        <BannerContainer>
            <ImgBanner src={BannerImg} alt=""/>

            <BannerDescription>
                <Paragraph>
                    {/* <h1>Programación web</h1> */}
                    Este challenge es una forma de arendizaje. Es un mecanismo donde podrás 
                    comprometerte en la resolución de un problema para poder aplicar todos 
                    los conocimientos adquiridos en la formación React. Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Explicabo blanditiis eaque nulla. Sapiente quas minima eligendi at officiis 
                    consectetur ea facilis expedita perferendis corporis, reprehenderit voluptatem alias fugit. Cum, illo.
                </Paragraph>

                <Player>
                    <ReactPlayer 
                    url={"https://www.youtube.com/watch?v=rnmbxqS1nRo"}
                    width="100%"
                    height="270px"
                    controls
                    volume={0.3}
                    />
                </Player>
                
            </BannerDescription>
        </BannerContainer>
    )
}

export default Banner;