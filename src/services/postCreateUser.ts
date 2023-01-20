import api from "./api";

export interface ICreateUser {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface AuthRegister {
  id: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const postCreateUser = async (createUser: ICreateUser) => {
  const { data, status } = await api.post<AuthRegister>("/users", createUser);

  if (status === 201) return data;
};
