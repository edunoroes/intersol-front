import React from "react";
import api from "../../services/api";
import { getItem } from "../../utils/storage";
import "./Modal.css";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  async function Saque() {
    const { valor } = props;

    try {
     const {data} =  await api.post(
        "/saque",
        { valor : valor.replace("R$", "").replace(",", "").replace(".","") },
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
      <form onSubmit={Saque} className="modal-content">
        {props.children}
        <button>Confirmar</button>
        <button onClick={props.onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default Modal;
