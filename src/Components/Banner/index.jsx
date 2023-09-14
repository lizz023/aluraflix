import React from "react";
import BannerImg from "../../assets/img/banner.jpg"
import styled from "styled-components";

const BannerContainer = styled.section`
    display: flex;
`

const ImgBanner = styled.img`
    height: 100vh;
    position: relative;
    width: 100%;
`
const BannerDescription = styled.div`
    display: flex;
    padding: 40px;
    position: absolute;
    top: 320px;
`
const Paragraph = styled.p`

    width: 600px;
`

const Banner = () => {
    return (
        <BannerContainer>
            <ImgBanner src={BannerImg} alt=""/>

            <BannerDescription>
                <Paragraph>
                    Este challenge es una forma de arendizaje. Es un mecanismo donde podrás 
                    comprometerte en la resolución de un problema para poder aplicar todos 
                    los conocimientos adquiridos en la formación React.
                </Paragraph>
            </BannerDescription>
        </BannerContainer>
    )
}

export default Banner;