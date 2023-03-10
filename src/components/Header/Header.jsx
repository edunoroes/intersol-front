import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { clearItem, getItem } from "../../utils/storage";
import CriarConta from "../CriarConta/CriarConta";
import CriarAgencia from "../CriarAgencia/CriarAgencia";

function ContainerInsideExample() {
  const [registrosConta, setRegistrosConta] = useState();
  const [result, setResult] = useState(false);
  const navigate = useNavigate();
  async function getContas() {
    try {
      const { data } = await api.get("/contas", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });
      setRegistrosConta(data);
      if (data.length > 0) {
        setResult(true);
      }
    } catch (error) {}
  }

  const logout = () => {
    clearItem();
    navigate('/login')
  };

  useEffect(() => {
    getContas();
  }, []);

  return (
    <>
      {result && (
        <div>
          <h3>Agência: {registrosConta[0].agencia_bancaria}</h3>
          <h3>Numero da Conta: {registrosConta[0].numero_conta}</h3>
          <h3>
            Saldo:R$ {registrosConta[0].limite.toFixed(2).replace(".", ",")}
          </h3>
          <button onClick={logout}>Sair</button>
        </div>
      )}
      {!result && (
        <div>
          <CriarConta />
          <button onClick={logout}>Sair</button>
        </div>
      )}
      <CriarAgencia/>
    </>
  );
}

export default ContainerInsideExample;
