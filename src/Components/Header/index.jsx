import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/LogoMain.png"

const StyledHeader = styled.nav`
    align-items: center;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
`
const LogoImg = styled.img`
    width: 168px;
`

const BtnHeader =  styled.button`
    
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to={"/"}>
                <LogoImg src={Logo} alt="logo" />
            </Link>
            <div>
                <Link>
                    <Button>Nuevo Video</Button>
                </Link>
            </div>
        </StyledHeader>
    )
}

export default Header;
