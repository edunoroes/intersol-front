import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { getItem, setItem } from "../../utils/storage";
import "./Login.css";

function Login() {
  const schema = yup
    .object({
      login: yup.string().required("O campo login é obrigatório"),
      senha: yup.string().required("O campo senha é obrigatório"),
    })
    .required();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { login, senha } = data;
      const responseData = await api.post("/login", {
        login,
        senha,
      });

      setItem("token", responseData.data.token);
      navigate("/home");
    } catch (error) {}
  };

  if (getItem("token")) {
    navigate("/home");
  }

  return (
    <div className="Login">
      <div className="containerRegister">
        <h1 className="titleRegister">Faça seu Login</h1>
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <label className="formLabel textLabel" htmlFor="nomeLabel">
              Nome de Usuario ou Email*
            </label>
            <input
              id="loginlabel"
              className="inputRegister"
              type="text"
              placeholder="Digite seu Nome de Usuario ou Email"
              {...register("login")}
            />
            <span className="errorInput span-error">
              {errors.login?.message}
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <label className="formLabel textLabel" htmlFor="emailLabel">
              Senha*
            </label>
            <input
              id="password"
              className="inputRegister"
              type="password"
              placeholder="Digite sua senha"
              {...register("senha")}
            />
            <span className="errorInput span-error">
              {errors.senha?.message}
            </span>
          </div>
          <button className="buttonContinue">Continuar</button>
        </form>
        <span className="textSpan">
          Não possui uma conta? Faça Seu <Link to="/cadastrar"> Cadastro </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
