import api from "./api";

export interface ICreateTech {
  title: string;
  status: string;
}

export const postCreateTech = async (createUser: ICreateTech) => {
  const { status } = await api.post("/users/techs", createUser);

  return status;
};
