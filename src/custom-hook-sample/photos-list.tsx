import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

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

export const Photos = () => {
  const [albumId, changeAlbumId] = useState(0);
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;

  const loadedInfo = useFetch(url);

  const handleAlbumId = e => changeAlbumId(e.target.value || 0);

  return (
    <section>
      <h1>useFetch custom hook demo 2</h1>
      <div>
        <input
          style={{ marginBottom: "1rem" }}
          type="number"
          onChange={handleAlbumId}
          value={albumId}
        />
      </div>
      {!loadedInfo.err &&
        loadedInfo.data.map((photo, idx) => (
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
