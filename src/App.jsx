import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  const logOrSignSetters = {
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
  };

  return (
    <>
      <Layout loggedUser={loggedUser}>
        <Signup logOrSignSetters={logOrSignSetters} />
        <Login logOrSignSetters={logOrSignSetters} />
      </Layout>
    </>
  );
};

export default App;
