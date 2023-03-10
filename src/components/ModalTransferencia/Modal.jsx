import React from "react";
import api from "../../services/api";
import { getItem } from "../../utils/storage";
import "./Modal.css";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  async function Transferencia() {
    const { valor,contaDestino } = props;

    try {
     const {data} =  await api.post(
        "/transferencia",
        { contaDestino,
          valor : valor.replace("R$", "").replace(",", "").replace(".","") },
        {
          headers: {
            authorization: `Bearer ${getItem("token")}`,
          },
        }
      );
      console.log(data)
    } catch (error) {}
  }

  return (
    <div className="modal">
      <form onSubmit={Transferencia} className="modal-content">
        {props.children}
        <button>Confirmar</button>
        <button onClick={props.onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default Modal;
