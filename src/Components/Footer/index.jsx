import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoMain.png"
import styled from "styled-components";

const LogoImg = styled.img`
    background-color: black;
    width: 168px;
`

const FooterContainer = styled.div`
    background-color: black;
    border: 3px solid #2A7AE4;
    display: flex;
    justify-content: center;
    padding: 30px;
    width: 100%;
`

const Footer = () => {
    return(
        <FooterContainer>
            <LogoImg src={Logo} alt="logo" />
        </FooterContainer>
    )
}

export default Footer;