import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BtnVoltar,
  ContainerCadastro,
  MainCadastro,
  Select,
  Title,
} from "./styles";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ICreateUser } from "../../services/postCreateUser";

function Cadastro() {
  const { voltarLogin, handleSubmitFunction } = useContext(UserContext);

  const formSchemaCadastro = yup.object({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Formato de email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Senha fora do padrão"
      ),
    confirmPassord: yup
      .string()
      .oneOf([yup.ref("password")], "A senhas não são iguais"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>({
    resolver: yupResolver(formSchemaCadastro),
  });

  return (
    <>
      <MainCadastro>
        <Title>
          <img src="Logo.png" alt="Kenzie Hub" />
          <BtnVoltar onClick={voltarLogin}>Voltar</BtnVoltar>
        </Title>

        <ContainerCadastro>
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis, vamos nessa!</p>
          <form onSubmit={handleSubmit(handleSubmitFunction)}>
            <label>Nome</label>

            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <span>{errors.name?.message}</span>
            <label>Email</label>

            <input
              type="text"
              placeholder="Digite aqui seu e-mail"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
            <label>Senha</label>

            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
            <label>Confirmar Senha</label>

            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            <label>Bio</label>

            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <span>{errors.bio?.message}</span>
            <label>Contato</label>

            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <span>{errors.contact?.message}</span>

            <label>Selecionar módulo</label>
            <Select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                {" "}
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </Select>

            <button type="submit">Cadastrar</button>
          </form>
        </ContainerCadastro>
        <ToastContainer />
      </MainCadastro>
    </>
  );
}

export default Cadastro;
