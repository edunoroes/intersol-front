import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getItem } from "../../utils/storage";
import "./style.css";
import { formatarData } from "../../utils/storage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const makeStyle = (tipo) => {
  if (tipo === "saque") {
    return {
      padding:"10px",
      background: "#FFEFEF",
      color: "#971D1D",
    };
  } else if (tipo === "deposito") {
    return {
      padding:"10px",
      background: "#3cca43",
      color: "#1d9731",
    }}
    else if (tipo === "estorno") {
      return {
        padding:"10px",
        background: "#cecb37",
        color: "#1d9731",
      }}
  else {
    return {
      padding:"10px",
      background: "#EEF6F6",
      color: "#1FA7AF",
    };
  }
};

export default function Tables() {
  const [registros, setRegistros] = useState([]);
  

  async function getTransacoes() {
    try {
      const { data } = await api.get("/transacoes", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });

      setRegistros(data);
    } catch (error) {
     
    }
  }

  useEffect(() => {
    getTransacoes();
  }, []);

 

  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numero da Conta</TableCell>
              <TableCell align="left">Valor</TableCell>
              <TableCell align="left">Data Movimentação</TableCell>
              <TableCell align="left">Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {registros.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.conta_bancaria}
                </TableCell>
                <TableCell align="left"> R$ {(row.valor).toFixed(2).replace('.', ',')} </TableCell>
                <TableCell align="left"> {formatarData(row.data_movimentacao)}</TableCell>
                <TableCell align="left">
                  <span className="tipo" style={makeStyle(row.tipo)}>
                    {row.tipo}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
