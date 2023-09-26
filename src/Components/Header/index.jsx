import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/LogoMain.png"


const NavContainer = styled.div`
    background-color: #000;
`

const StyledHeader = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1136px;
    padding: 20px 40px;
`
const LogoImg = styled.img`
    width: 168px;
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`

const Header = () => {
    return (
        <NavContainer>
            <StyledHeader>
                <Link to={"/"}>
                    <LogoImg src={Logo} alt="logo" />
                </Link>
                <ButtonsContainer>
                    <Link to={"/newVideo"}>
                        <Button>Nuevo Video</Button> 
                    </Link>

                    <Link to={"/newCategoria"}>
                        <Button>Nueva Categoria</Button>
                    </Link>
                </ButtonsContainer>
            </StyledHeader>
           

        </NavContainer>
        
    )
}

export default Header;
