import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    background-color: #000;
    border: 1px solid white;
    border-radius: 5px;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 14px;
`

const Button = (props) => {
    return(
        <Btn>
            {props.children}
        </Btn>
    ) 
}

export default Button;