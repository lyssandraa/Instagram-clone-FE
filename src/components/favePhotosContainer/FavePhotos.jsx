import { useState, useEffect } from "react";
import { getFaves } from "../../utils/fetch";
import styled from "styled-components";

const FavePhotos = ({ isLoggedIn, loggedInUserId }) => {
  const [favePhotos, setFavePhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const loadFavourites = async () => {
      try {
        const response = await getFaves(loggedInUserId);
        setFavePhotos(response.faves || []);
      } catch (err) {
        setErr("Failed to load favorite photos");
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      loadFavourites();
    }
  }, [isLoggedIn, loggedInUserId]);

  return (
    <Wrapper>
      {loading ? (
        <p>Loading favourite photos...</p>
      ) : err ? (
        <p>{err}</p>
      ) : (
        <PhotosWrapper>
          {favePhotos.map((photo) => (
            <PhotoCard key={photo.id}>
              <img
                src={photo.fave.imageUrls.small}
                alt={photo.photographer_name}
              />
              <p>{photo.photographer_name}</p>
            </PhotoCard>
          ))}
        </PhotosWrapper>
      )}
    </Wrapper>
  );
};

export default FavePhotos;

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
`;
