import { useState, useEffect } from "react";

export const useFetch = url => {
  const [state, changeState] = useState({
    data: [],
    err: undefined
  });

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => changeState(() => ({ data: res, err: undefined })))
      .catch(err => changeState(() => ({ data: [], err })));
  }, [url]);

  return state;
};
