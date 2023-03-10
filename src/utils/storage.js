import { format, parseISO} from 'date-fns';
import { ptBR } from 'date-fns/locale';


export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getItem = (key) => {
  return localStorage.getItem(key);
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const clearItem = () => {
  localStorage.clear();
};

export function formatarData(data){
  const one = new Date(data);
  return format(one,'dd/MM/yyyy',{ locale: ptBR, timeZone: 'America/Sao_Paulo' }) ;
}