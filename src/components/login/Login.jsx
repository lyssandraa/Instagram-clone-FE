import { useState } from "react";
import { login } from "../../utils/fetch";
import styled from "styled-components";

const Login = ({ logOrSignSetters }) => {
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
      </form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  border: 1px solid black;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  input {
    display: flex;
  }

  button {
    margin: 7px 0 7px 0;
  }
`;

const ErrMsg = styled.p`
  color: red;
  margin: 10px;
`;
