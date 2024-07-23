import { useState } from "react";
import { signup } from "../../utils/fetch";
import styled from "styled-components";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await signup(username, email, password);

    setUsername();
    setEmail();
    setPassword();
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Signup</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setEmail)}
            type="email"
            placeholder="Email..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button>Signup</button>
      </form>
    </Wrapper>
  );
};

export default Signup;

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
