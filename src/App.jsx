import "./App.css";
import Layout from "./components/layout/Layout";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

const App = () => {
  return (
    <>
      <Layout>
        <Signup />
        <Login />
      </Layout>
    </>
  );
};

export default App;
