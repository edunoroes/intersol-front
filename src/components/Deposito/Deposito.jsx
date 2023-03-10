import React, { useState } from "react";
import InputMask from "react-input-mask";
import Modal from "../ModalDeposito/Modal";

function Deposito() {
  const [showModal, setShowModal] = useState(false);
  const [valor, setValor] = useState("");

  const handleInput = (e) => {
    setValor(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-deposito">
      <button onClick={handleShowModal}>Deposito</button>
      <Modal show={showModal} onClose={handleCloseModal} valor={valor}>
        <h2 className="align-center"> Valor</h2>
        <InputMask
          mask="R$ 999,999.99"
          maskChar=" "
          placeholder="Digite o Valor"
          onChange={handleInput}
          required
        />
      </Modal>
    </div>
  );
}

export default Deposito;
