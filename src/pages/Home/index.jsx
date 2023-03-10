import Deposito from "../../components/Deposito/Deposito";
import Estorno from "../../components/Estorno/Estorno";
import Header from "../../components/Header/Header";
import Saque from "../../components/Saque/Saque";
import BasicTable from "../../components/Table/index";
import Transferencia from "../../components/Transferencia/Transferencia";
import "./index.css";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <div className="container-transacoes">
        <Deposito />
        <Saque />
        <Transferencia />
        <Estorno />
      </div>
      <BasicTable />
    </div>
  );
};

export default Home;
