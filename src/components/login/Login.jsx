import { useState } from "react";
import { login } from "../../utils/fetch";
import styled from "styled-components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(username, password);

    setUsername();
    setPassword();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Login</h3>
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
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
