import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";

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
    email: '',
    password: '',
    rememberMe:false,
  });

  // Check if credentials are stored in localStorage on component mount
  useEffect(() => {        
    const credentialsAsString = localStorage.getItem('credentials');
    const credentials = (credentialsAsString)?JSON.parse(credentialsAsString):undefined;

    if (credentials) {
    // Update initial values based on localstorage
    setInitialValues({
      email: credentials.email,
      password: credentials.password,
      rememberMe: credentials.rememberMe
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
        localStorage.setItem('credentials',JSON.stringify(values));

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
      <h1>FORM DE LOGIN</h1>

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
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Mot de Passe</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit">Se Connecter</button>
          <label>
                Remember Me
                <Field type="checkbox" name="rememberMe" />
              </label>
        </Form>
      </Formik>
      {shouldNavigate && <Navigate to="/home" />}
    </>
  );
}
