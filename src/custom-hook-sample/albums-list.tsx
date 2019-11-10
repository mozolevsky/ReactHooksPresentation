import React, { useState } from "react";
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

export const Albums = () => {
  const [userId, changeAlbumId] = useState(0);
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;

  const loadedInfo = useFetch(url);

  const handleAlbumId = e => changeAlbumId(e.target.value || 0);

  return (
    <section>
      <h1>useFetch custom hook demo</h1>
      <div>
        <input
          style={{ marginBottom: "1rem" }}
          type="number"
          onChange={handleAlbumId}
          value={userId}
        />
      </div>
      {!loadedInfo.err &&
        loadedInfo.data.map((album, idx) => (
          <div style={recordBox} key={idx}>
            <img style={image} src={album.url} alt="" />
            <p style={{ textAlign: "left" }}>
              {album.id} - {album.title}
            </p>
          </div>
        ))}
    </section>
  );
};
