import React, { useState } from "react";
import InputMask from "react-input-mask";
import Modal from "../ModalCriarAgencia/Modal";

function CriarAgencia() {
  const [showModal, setShowModal] = useState(false);
  const [endereco, setEndereco] = useState("");
  const [numeroAgencia,setNumeroAgencia] = useState("");
  
  
  const handleInput = (e) => {
    setEndereco(e.target.value);
  };

  const handleInputConta = (e) => {
    setNumeroAgencia(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Criar Agencia Bancária</button>
      <Modal show={showModal} onClose={handleCloseModal} endereco={endereco} numeroAgencia={numeroAgencia}>
        <h2 className="align-center">Insira os Dados</h2>
        <label htmlFor=""> Digite o Endereço</label>
        <InputMask onChange={handleInput}
          placeholder="Fortaleza-CE"
          required
        />
        <label htmlFor=""> Digite o Número da Agência</label>
        <InputMask onChange={handleInputConta} type="text" placeholder="Numero da Agencia" required />
      </Modal>
    </div>
  );
}

export default CriarAgencia;
