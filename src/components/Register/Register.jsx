import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import "./Register.css";

const schema = yup
  .object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    username: yup.string().required("O nome de usuario é obrigatorio"),
    senha: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("O campo senha é obrigatório"),
  })
  .required();

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { nome, email, username, senha } = data;

    try {
      await api.post("/cadastro", {
        nome,
        email,
        username,
        senha,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Register">
      <div className="containerRegister">
        <h1 className="titleRegister">Cadastre-se</h1>
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <label className="formLabel textLabel" htmlFor="nomeLabel">
              Nome Completo
            </label>
            <input
              id="nomeLabel"
              className="inputRegister"
              type="text"
              placeholder="Digite seu nome"
              {...register("nome")}
            />
            <span className="errorInput span-error">
              {errors.nome?.message}
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <label className="formLabel textLabel" htmlFor="nomeLabel">
              Nome de Usuario
            </label>
            <input
              id="usernameLabel"
              className="inputRegister"
              type="text"
              placeholder="Digite seu nome de Usuario"
              {...register("username")}
            />
            <span className="errorInput span-error">
              {errors.username?.message}
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <label className="formLabel textLabel" htmlFor="nomeLabel">
              Email
            </label>
            <input
              id="emailLabel"
              className="inputRegister"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <span className="errorInput span-error">
              {errors.email?.message}
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
          Já possui uma conta? Faça Seu <Link to="/login"> Login </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
