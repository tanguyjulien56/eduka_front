import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import { BlueButton, GreatBlueButton } from "../../components/Button/Button";

//TODO FAIRE
export default function Login() {
  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);
  const [errorAuthentification, setErrorAuthentification] =
    useState<boolean>(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const [initialValues, setInitialValues] = useState<LoginInterface>({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Check if credentials are stored in localStorage on component mount
  useEffect(() => {
    const credentialsAsString = localStorage.getItem("credentials");
    const credentials = credentialsAsString
      ? JSON.parse(credentialsAsString)
      : undefined;

    if (credentials) {
      // Update initial values based on localstorage
      setInitialValues({
        email: credentials.email,
        password: credentials.password,
        rememberMe: credentials.rememberMe,
      });
    }
  }, []);

  const handleSubmit = async (values: LoginInterface) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(values);

      console.log(response.data);
      const usersList = response.data;

      const filteredUsers = usersList.filter((user: { email: string }) =>
        user.email.toLowerCase().includes(values.email.toLowerCase())
      );
      console.log(filteredUsers);

      if (filteredUsers && filteredUsers.length === 1) {
        console.log("vous etes bien authentifie");
        sessionStorage.setItem("token", "true");
        localStorage.setItem("credentials", JSON.stringify(values));

        setShouldNavigate(true);
      } else {
        console.log("Go and fuck yourself");
        setShouldNavigate(false);
        setErrorAuthentification(true);
      }

      // Handle successful login here, such as setting user state or redirecting to another page
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error, display error message, etc.
    }
  };
  return (
    <>
      {errorAuthentification && (
        <>
          <h2>I don't know you so go and fuck yourself</h2>
        </>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form className="flex flex-col w-64 ml-80 mt-20 bg-transparent">
          <div className="flex">
            <img src="./public/logo_LoginPage.png" alt="eduka" />
          </div>
          <h1>Veuillez rentrer vos informations :</h1>
          <div>
            <label htmlFor="email">Email</label>
            <Field className="border rounded-md block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Mot de Passe</label>
            <Field className="border rounded-md block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange" type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <label>
            Mot de passe oublié ?
          </label>
          <label>
            <Field className="border rounded-md text-decorration-color:#0FA3B1" type="checkbox" name="rememberMe" />
            Se souvenir de moi ?
          </label>
          <br />
          <BlueButton type="submit">Se Connecter</BlueButton>
        </Form>
      </Formik>
      {shouldNavigate && <Navigate to="/home" />}
    </>
  );
}
