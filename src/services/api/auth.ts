import { useApi } from "../../hooks/useApi.ts";

const api = useApi();

interface AuthSignin {
  email: string;
  password: string;
}

export async function signin(body: AuthSignin) {
  try {
    const { data } = await api.post(`auth/signin`, body);
    return data;
  } catch (error) {
    return {
      error: error,
    };
  }
}

export async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  const headers = { Authorization: "Bearer " + refreshToken };

  try {
    const response = await api.get(`posts/${id}`, body);
    // simulation of success api response
    return {
      datas: body,
      status: 200,
    };
  } catch (error) {
    return error;
  }
}
