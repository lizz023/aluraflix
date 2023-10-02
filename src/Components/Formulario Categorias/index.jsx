import { Button } from "@mui/material";
import CampoTexto from "../CampoTexto";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 16px 0;
`

const FormularioCategorias = () => {
    return(
        <form action="">
            <h3>Nueva Categoria</h3>
            <CampoTexto
                id = "name"
                label = "Nombre"
                required
            />
            <CampoTexto
                id ="description"
                label ="Descripción"
                required
            />
            <CampoTexto
                id ="color"
                label ="Seleccione el color para la nueva categoria"
                required
                type= "color"
            />
            <ButtonContainer>
                <Button variant="contained" color="primary" size="large">
                    Guardar
                </Button>

                <Button variant="contained" color="inherit" size="large">
                    Limpiar
                </Button>
            </ButtonContainer>
        </form>
    )
}

export default FormularioCategorias;
