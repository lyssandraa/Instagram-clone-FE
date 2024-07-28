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

export const login = async (username, password) => {
  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();
  console.log(data);

  return data;
};

export const fetchPhotos = async () => {
  const response = await fetch("http://localhost:5001/api/photos", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  console.log(data);

  return data;
};

export const addFave = async (photo, loggedInUserId) => {
  const response = await fetch("http://localhost:5001/faves/addFave", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageId: photo.id,
      imageUrls: photo.imageUrls,
      likes: photo.likes,
      photographer_name: photo.photographer_name,
      UserId: loggedInUserId,
    }),
  });

  const data = await response.json();
  console.log("Response from addFave:", data);
  return data;
};

export const getFaves = async (loggedInUserId) => {
  const response = await fetch(
    `http://localhost:5001/faves/getFaves?userId=${loggedInUserId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data.faves || [];
};
