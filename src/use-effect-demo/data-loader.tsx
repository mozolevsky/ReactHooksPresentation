import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log(photos);
  });

  return (
    <section>
      <h1>UseEffect hook demo</h1>
      <div>
        <input
          type="number"
          onChange={e => changeAlbumId((e.target.value as unknown) as number)}
          value={albumId}
        />
      </div>
      {!photos.err &&
        photos.data.map((photo, idx) => (
          <p key={idx}>
            {photo.id} - {photo.title}
          </p>
        ))}
    </section>
  );
};
