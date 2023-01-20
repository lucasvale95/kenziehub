import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { Container, Form, Title } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { IModalProps } from "../../pages/Dashboard";
import { ICreateTech, postCreateTech } from "../../services/postCreateTech";
import api from "../../services/api";
import { IUser } from "../../contexts/UserContext";

const Modal = ({ setIsOpenModal, techs, setTechs }: IModalProps) => {
  const modalRef = useRef<HTMLHeadingElement>(null);

  const formSchema = yup.object({
    title: yup.string().required("Tecnologia obrigatória"),
  });

  useEffect(() => {}, [techs]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTech>({
    resolver: yupResolver(formSchema),
  });

  const createTech = (data: ICreateTech): void => {
    postCreateTech(data)
      .then(async (res) => {
        res === 201 && setIsOpenModal(false);
        setTimeout(() => {
          toast.success("Tecnologia adicionada");
        }, 1000);
        const { data } = await api.get<IUser>("/profile");
        setTechs(data.techs);
      })
      .catch((err) => toast.error("Não foi possível adicionar tecnologia!"));
  };

  return (
    <Container>
      <div className="modal-box" ref={modalRef}>
        <Title>
          <h3>Cadastrar Tecnologia</h3>
          <button
            onClick={() => setIsOpenModal(false)}
            className="close-button"
          >
            <MdClose size={20} />
          </button>
        </Title>
        <Form onSubmit={handleSubmit(createTech)}>
          <label>Nome</label>
          <input type="text" placeholder="Tecnologia" {...register("title")} />

          <label>Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </Form>
      </div>
    </Container>
  );
};

export default Modal;
