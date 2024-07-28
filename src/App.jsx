import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import PhotosContainer from "./components/photosContainer/PhotosContainer";
import FavePhotos from "./components/favePhotosContainer/FavePhotos";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showFaves, setShowFaves] = useState(false);

  const logOrSignSetters = {
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
  };

  return (
    <div className="App">
      <Layout loggedUser={loggedUser} setShowLogin={setShowLogin}>
        {isLoggedIn ? (
          <>
            <button onClick={() => setShowFaves(!showFaves)}>
              {showFaves ? "Show All Photos" : "Show Favourite Photos"}
            </button>
            {showFaves ? (
              <FavePhotos
                isLoggedIn={isLoggedIn}
                loggedInUserId={loggedUser.user.id}
              />
            ) : (
              <PhotosContainer
                isLoggedIn={isLoggedIn}
                loggedInUserId={loggedUser.user.id}
              />
            )}
          </>
        ) : showLogin ? (
          <Login
            logOrSignSetters={logOrSignSetters}
            setShowLogin={setShowLogin}
          />
        ) : (
          <Signup
            logOrSignSetters={logOrSignSetters}
            setShowLogin={setShowLogin}
          />
        )}
      </Layout>
    </div>
  );
};

export default App;
