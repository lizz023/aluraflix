import React from "react";
import styled from "styled-components";
import TableGroup from "../Components/Table";
import FormularioCategorias from "../Components/Formulario Categorias";

const Main = styled.section`
    max-width: 1136px;
    margin: 0 auto;
    padding: 40px;
`


const NewCategoria = (props) => {
    return(
        <Main>
            <FormularioCategorias/>
        <TableGroup/>

        </Main>
    )
}

export default NewCategoria;