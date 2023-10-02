import {TableContainer, Table, TableHead, TableBody ,TableRow ,  TableCell, Paper} from "@mui/material";
import React from "react";

const TableGroup = () => {
    return (
        
        <TableContainer component={Paper} sx={{maxHeight: "300px"}}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell align = "center">Eliminar</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>hola</TableCell>
                        <TableCell>hola</TableCell>
                        <TableCell>hola</TableCell>
                        <TableCell>hola</TableCell>
                        <TableCell>hola</TableCell>
                        <TableCell>hola</TableCell>
                    </TableRow>

                    

                    



                    {/* {data.map((row) =>(
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.id}</TableCell>
                            
                        </TableRow>
                            
                        
                    ))} */}
                </TableBody>

            </Table>
            
        </TableContainer>
    )
}

export default TableGroup; 
