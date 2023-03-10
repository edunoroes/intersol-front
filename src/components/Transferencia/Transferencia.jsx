import React, { useState } from "react";
import InputMask from "react-input-mask";
import Modal from "../ModalTransferencia/Modal";

function Transferencia() {
  const [showModal, setShowModal] = useState(false);
  const [valor, setValor] = useState("");
  const [contaDestino,setContaDestino] = useState("");
  
  
  const handleInput = (e) => {
    setValor(e.target.value);
  };

  const handleInputConta = (e) => {
    setContaDestino(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Transferencia</button>
      <Modal show={showModal} onClose={handleCloseModal} valor={valor} contaDestino={contaDestino}>
        <h2 className="align-center">Valor</h2>
        <InputMask onChange={handleInput}
          mask="R$ 999,999.99"
          maskChar=" "
          placeholder=" Digite o valor"
          required
        />
        <InputMask onChange={handleInputConta} type="text" placeholder="Numero da Conta" required />
      </Modal>
    </div>
  );
}

export default Transferencia;
