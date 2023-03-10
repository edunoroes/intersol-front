import React from "react";
import api from "../../services/api";
import { getItem } from "../../utils/storage";
import "./Modal.css";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  async function Sacar() {
    const { agencia, numeroConta } = props;

    try {
      const { data } = await api.post(
        "/conta",
        { agencia_bancaria: agencia, numero_conta: numeroConta },
        {
          headers: {
            authorization: `Bearer ${getItem("token")}`,
          },
        }
      );
      console.log(data);
    } catch (error) {}
  }

  return (
    <div className="modal">
      <form onSubmit={Sacar} className="modal-content">
        {props.children}
        <button>Confirmar</button>
        <button onClick={props.onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default Modal;
