import { useApi as UseApi } from "../../hooks/useApi";

const api = UseApi();

interface AuthSignin {
  email: string;
  password: string;
}

export async function signin(body: AuthSignin) {
  try {
    const { data } = await api.post(`auth/signInJulien`, body);
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("Signin failed:", error);
    return {
      error: error,
    };
  }
}
export const isAuthenticated = () => {
  const token = localStorage.getItem("accessToken");
  console.log("Token:", token);
  return !!token; //  !! pour convertir en booléen
};
