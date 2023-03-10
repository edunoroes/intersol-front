import React, { useState } from "react";
import InputMask from "react-input-mask";
import Modal from "../ModalCriarConta/Modal";

function CriarConta() {
  const [showModal, setShowModal] = useState(false);
  const [agencia, setAgencia] = useState("");
  const [numeroConta,setNumeroConta] = useState("");
  
  
  const handleInput = (e) => {
    setAgencia(e.target.value);
  };

  const handleInputConta = (e) => {
    setNumeroConta(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Criar Conta Bancária</button>
      <Modal show={showModal} onClose={handleCloseModal} agencia={agencia} numeroConta={numeroConta}>
        <h2 className="align-center">Insira os Dados</h2>
        <InputMask onChange={handleInput}
          placeholder=" Digite a Agencia"
          required
        />
        <InputMask onChange={handleInputConta} type="text" placeholder="Numero da Conta" required />
      </Modal>
    </div>
  );
}

export default CriarConta;
