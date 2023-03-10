import { useEffect, useState } from "react";
import api from "../services/api";
import { getItem } from "../utils/storage";


export function useTransacoes() {
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
      console.log(error);
    }
  }
  
  useEffect(() => {
    getTransacoes();
  }, []);

  return {
    getTransacoes,
    registros,
    setRegistros,
  };
}
