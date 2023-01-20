import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postUser, UserLogin } from "../services/postUser";
import { ICreateUser, postCreateUser } from "../services/postCreateUser";
import api from "../services/api";

export interface ITechs {
  id: string;
  title: string;
  status: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  techs: ITechs[] | undefined;
  course_module: string;
}

interface IContextProps {
  user: IUser | undefined;
  techs: ITechs[] | undefined;
  loading: boolean;
  signIn: (data: UserLogin) => void;
  setTechs: React.Dispatch<React.SetStateAction<ITechs[] | undefined>>;
  voltarLogin: () => void;
  handleSubmitFunction: (data: ICreateUser) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IContextProps>({} as IContextProps);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [techs, setTechs] = useState<ITechs[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@token");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          const { data } = await api.get<IUser>("/profile");

          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const signIn = (data: UserLogin): void => {
    postUser(data).then((response) => {
      setUser(response.user);

      api.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;

      localStorage.setItem("@token", response.token);
      localStorage.setItem("@user", JSON.stringify(response.user));

      navigate("/dashboard", { replace: true });
    });
  };

  function voltarLogin() {
    navigate("/login", { replace: true });
  }

  const handleSubmitFunction = (data: ICreateUser) => {
    postCreateUser(data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 3000);
      })
      .catch((err) => toast.error("Não foi possível criar conta!"));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        signIn,
        techs,
        setTechs,
        handleSubmitFunction,
        voltarLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
