export const signup = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();
  console.log(data);
  return data;
};
