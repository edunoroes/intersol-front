import { createContext, useContext } from "react";
import { useTransacoes } from "./getTransacoes";

const storesCtx = createContext(null);

export function useStoresCtx() {
  return useContext(storesCtx);
}

export function Provider({ children }) {
  const getTransaction = useTransacoes();
console.log(getTransaction )
  return (
    <storesCtx.Provider value={{ getTransaction }}>
      {children}
    </storesCtx.Provider>
  );
}
