import { useState } from "react";
import api from "../services/api";
import { getItem, setItem } from "../utils/storage";

export function useIdClient() {
  const [nameClient, setNameClient] = useState("");
  const [idClient, setIdClient] = useState("");
  const [dataClient, setDataClient] = useState({});

  async function takeIdClient(id, remetente) {
    try {
      const { data } = await api.get(`/${id}/contas`, {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });

      setNameClient(data.nome);
      setIdClient(data.id);
      setDataClient(data);

      setItem("id_client", data.id);
      setItem("name_client", data.nome);

    } catch (error) {
      console.log(error);
    }
  }

  return {
    takeIdClient,
    nameClient,
    idClient,
    dataClient,
  };
}
