import React from "react";
import styled from "styled-components";
import {ColorScheme} from "../../Variables/ColorScheme"

const Btn = styled.button`
    background-color: ${props => props.backgroundColor || ColorScheme.black };
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    padding: 10px;
    color: ${props => props.color || ColorScheme.white};

    @media (min-width: 1136px){
        font-size: 16px;
        font-weight: 600;
        padding: 14px;
    }
    @media (min-width: 768px){
        padding: 14px;
    }
`

const Button = (props) => {
    return(
        
        <Btn {...props}>
           {props.children}
        </Btn>
    )
}

export default Button;