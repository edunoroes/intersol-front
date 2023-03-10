import React, { useState } from "react";
import InputMask from "react-input-mask";
import ModalSaque from "../ModalSaque/Modal";

function Saque() {
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
    <div>
      <button onClick={handleShowModal}>Saque</button>
      <ModalSaque show={showModal} onClose={handleCloseModal} valor={valor}>
        <h2 className="align-center" >Valor</h2>
        <InputMask mask="R$ 999,999.99" maskChar=" " placeholder="Digite o Valor" onChange={handleInput} required />
      </ModalSaque>
    </div>
  );
}

export default Saque;
