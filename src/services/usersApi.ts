import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export const token = {
  set: (value: string) => {
    localStorage.setItem("token", value);
  },

  unset: () => {
    localStorage.setItem("token", "");
  },
};

export const createUserService = async (body: IUser) => {
  return api.post("/register", body);
};

export const loginUserService = async (body: IUser) => {
  const { data } = await api.post("/login", body);
  token.set(data);
  return data;
};

export const logoutUserService = async () => {
  token.unset();
  return api.get("/login");
};
