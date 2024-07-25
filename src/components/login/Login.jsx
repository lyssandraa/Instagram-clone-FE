import { useState } from "react";
import { login } from "../../utils/fetch";
import styled from "styled-components";

const Login = ({ logOrSignSetters, setShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(username, password);
      if (data.err) {
        setErr("User not found");
      } else {
        logOrSignSetters.setIsLoggedIn(true);
        logOrSignSetters.setLoggedUser(data);
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      setErr("User not found");
      console.log("Login failed", err);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        {err && <ErrMsg>{err}</ErrMsg>}
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button type="submit">Login</button>
        <p onClick={() => setShowLogin(false)}>
          Don't have an account? <a>Sign up</a>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 250px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 43%;

  form {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 20px;
    border: 1px solid black;
  }

  input {
    width: 100%;
    padding: 8px;
    display: flex;
    margin-bottom: 10px;
  }

  button {
    margin: 7px 0 7px 0;
  }

  p {
    margin-top: 10px;
  }

  a {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
`;

const ErrMsg = styled.p`
  color: red;
  margin: 10px 0;
`;
