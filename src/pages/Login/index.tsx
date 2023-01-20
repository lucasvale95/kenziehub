import { Container, Main } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { UserLogin } from "../../services/postUser";

function Login() {
  const { signIn } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").min(8, undefined),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: yupResolver(formSchema),
  });

  let navigate = useNavigate();

  function enviarParaCadastro() {
    navigate("/cadastro", { replace: true });
  }

  //     email: "testando@email.com",
  //     password: "SenhaDificil1.",

  return (
    <Main>
      <img src="Logo.png" alt="Kenzie Hub" />
      <Container>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(signIn)}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Insira seu e-mail"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label>Senha</label>
          <input
            type="password"
            placeholder="Insira sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <button type="submit">Entrar</button>
        </form>
        <p>Ainda não possui conta?</p>
        <button className="cadastro" onClick={enviarParaCadastro}>
          Cadastre-se
        </button>
      </Container>
      <ToastContainer />
    </Main>
  );
}

export default Login;
