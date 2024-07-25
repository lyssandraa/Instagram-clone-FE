import { useState } from "react";
import { signup } from "../../utils/fetch";
import styled from "styled-components";

const Signup = ({ logOrSignSetters, setShowLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(username, email, password);
      console.log(data);
      logOrSignSetters.setIsLoggedIn(true);
      logOrSignSetters.setLoggedUser(data);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log("Signup failed", err);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign Up</h3>
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
        <p onClick={() => setShowLogin(true)}>
          Already have an account? <a>Log in</a>
        </p>
      </form>
    </Wrapper>
  );
};

export default Signup;

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
