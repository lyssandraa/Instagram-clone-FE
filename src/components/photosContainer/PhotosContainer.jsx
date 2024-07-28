import { useState, useEffect } from "react";
import { fetchPhotos, addFave, getFaves } from "../../utils/fetch";
import styled from "styled-components";

const PhotosContainer = ({ isLoggedIn, loggedInUserId }) => {
  const [photos, setPhotos] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await fetchPhotos();
        setPhotos(data);
      } catch (err) {
        console.log("Error fetching photos:", err);
        setErr("Failed to load photos");
      } finally {
        setLoading(false);
      }
    };

    const loadFavourites = async () => {
      try {
        const faves = await getFaves(loggedInUserId);
        setFavourites(faves);
      } catch (err) {
        console.log("Error fetching favourites:", err);
      }
    };

    loadPhotos();

    if (isLoggedIn) {
      loadFavourites();
    }
  }, [isLoggedIn, loggedInUserId]);

  const handleLike = async (photo) => {
    try {
      const data = await addFave(photo, loggedInUserId);
      if (data && data.fave) {
        setFavourites((prevFavourites) => [...prevFavourites, data.fave]);
      }
    } catch (err) {
      console.log("Error liking photo:", err);
    }
  };

  const isFavourite = (photoId) => {
    return favourites.some((fave) => fave.id === photoId);
  };

  const renderLikeButton = (photo) => {
    const isLiked = isFavourite(photo.id);
    const buttonText = isLiked ? "Liked" : "Like";
    return <button onClick={() => handleLike(photo)}>{buttonText}</button>;
  };

  return (
    <Wrapper>
      {loading ? (
        <p>Loading photos...</p>
      ) : err ? (
        <p>{err}</p>
      ) : (
        <PhotosWrapper>
          {photos.map((photo) => (
            <PhotoCard key={photo.id}>
              <img src={photo.imageUrls?.small} alt={photo.photographer_name} />
              <p>{photo.photographer_name}</p>
              {isLoggedIn && renderLikeButton(photo)}
            </PhotoCard>
          ))}
        </PhotosWrapper>
      )}
    </Wrapper>
  );
};

export default PhotosContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const PhotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

const PhotoCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;

  img {
    width: 100%;
    height: auto;
  }

  p {
    margin: 5px 0;
  }

  button {
    margin-top: 10px;
  }
`;
