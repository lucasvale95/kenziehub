import { Main, Header, Nav, Logout, Title, Container, Card } from "./styles";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ITechs, IUser, UserContext } from "../../contexts/UserContext";
import { BsPlus, BsTrash } from "react-icons/bs";
import Modal from "../../components/Modal";
import api from "../../services/api";
import { toast, ToastContainer } from "react-toastify";

export interface IModalProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  techs: ITechs[] | undefined;
  setTechs: React.Dispatch<React.SetStateAction<ITechs[] | undefined>>;
}

function Dashboard() {
  const { user, loading, techs, setTechs } = useContext(UserContext);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const navigate = useNavigate();

  async function removeTech(id: any): Promise<void> {
    await api.delete(`/users/techs/${id}`);
    setTechs(() => techs?.filter((tech) => tech.id !== id));
    setTimeout(() => {
      toast.error("Tecnologia removida");
    }, 1000);
  }

  useEffect(() => {
    async function getTechs() {
      const { data } = await api.get<IUser>("/profile");
      setTechs(data.techs);
    }
    getTechs();
  }, [techs, setTechs]);

  function voltarLogin() {
    navigate("/login", { replace: true });
    localStorage.removeItem("@user");
    localStorage.removeItem("@token");
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {user ? (
        <div className="margin">
          <Nav>
            <div>
              <img src="Logo.png" alt="Kenzie Hub" />
              <button onClick={voltarLogin}>Sair</button>
            </div>
          </Nav>
          <Header>
            <div>
              <h2>Olá, {user.name} </h2>
              <p>{user.course_module}</p>
            </div>
          </Header>
          <Main>
            <Title>
              <h3>Tecnologias</h3>
              <button onClick={() => setIsOpenModal(true)}>
                <span>
                  <BsPlus size={22} color={"white"} />
                </span>
              </button>
            </Title>
            <Container>
              <ul>
                {techs?.map((tech, index) => (
                  <Card key={index}>
                    <div>
                      <h4>{tech.title}</h4>
                      <p>{tech.status}</p>
                    </div>
                    <BsTrash onClick={() => removeTech(tech.id)} />
                  </Card>
                ))}
              </ul>
            </Container>
            <ToastContainer />
            {isOpenModal && (
              <Modal
                setIsOpenModal={setIsOpenModal}
                techs={techs}
                setTechs={setTechs}
              ></Modal>
            )}
          </Main>
        </div>
      ) : (
        <Logout>
          <div>
            <img src="Logo.png" alt="Kenzie Hub" />
            <h1>Você está deslogado! :(</h1>
            <button onClick={voltarLogin}>Voltar</button>
          </div>
        </Logout>
      )}
    </>
  );
}

export default Dashboard;
