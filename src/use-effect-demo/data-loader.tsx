import React, { useEffect, useState } from "react";

const recordBox = {
  display: "flex",
  alignItems: "center",
  border: "1px solid black",
  padding: "10px",
  marginBottom: "0.5rem"
};

const image = {
  width: "50px",
  marginRight: "0.5rem"
};

export const DataLoader = () => {
  const [photos, loadPhotos] = useState({
    data: [],
    err: undefined
  });

  const [albumId, changeAlbumId] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(res => res.json())
      .then(res => loadPhotos(() => ({ data: res, err: undefined })))
      .catch(err => loadPhotos(() => ({ data: [], err })));
  }, [albumId]);

  return (
    <section>
      <h1>UseEffect hook demo</h1>
      <div>
        <input
          style={{ marginBottom: "1rem" }}
          type="number"
          onChange={e => changeAlbumId((e.target.value as unknown) as number)}
          value={albumId}
        />
      </div>
      {!photos.err &&
        photos.data.map((photo, idx) => (
          <div style={recordBox} key={idx}>
            <img style={image} src={photo.url} alt="" />
            <p style={{ textAlign: "left" }}>
              {photo.id} - {photo.title}
            </p>
          </div>
        ))}
    </section>
  );
};
