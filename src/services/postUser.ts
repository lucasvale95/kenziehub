import { IUser } from "../contexts/UserContext";
import api from "./api";

export interface UserLogin {
  email: string;
  password: string;
}

interface AuthModel {
  user: IUser;
  token: string;
}

export const postUser = async (loginRequest: UserLogin) => {
  const { data } = await api.post<AuthModel>("/sessions", loginRequest);
  return data;
};
