import { useState, useEffect } from "react";
import { fecthPhotos } from "../../utils/fetch";
import styled from "styled-components";

const PhotosContainer = () => {
  const [photos, setPhotos] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await fecthPhotos();
        setPhotos(data);
      } catch (err) {
        console.log("Error fetching photos:", err);
        setErr("Failed to load photos");
      } finally {
        setLoading(false);
      }
    };
    loadPhotos();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <p>Loading photos...</p>
      ) : err ? (
        <p>{err}</p>
      ) : (
        <PhotosWrapper>
          {photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.imageUrls.small} alt={photo.photographer_name} />
              <p>{photo.photographer_name}</p>
            </div>
          ))}
        </PhotosWrapper>
      )}
    </Wrapper>
  );
};

export default PhotoGalleryPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;

  div {
    border: 1px solid #ccc;
    padding: 10px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
