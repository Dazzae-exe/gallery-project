import axios from "axios";
import React from "react";

function useFetch(initialValue, url, params) {
  const [images, setImages] = React.useState(initialValue);

  React.useEffect(() => {
    const abortController = new AbortController();

    axios
      .get(url, {
        headers: {
          Authorization: import.meta.env.VITE_ACCESS_KEY,
        },
        params,
        signal: abortController.signal,
      })
      .then((res) => {
        if (!res.status === 200) {
          console.log(res.status);
        } else {
          setImages(res.data);
          console.log(res.data);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return { images };
}

export default useFetch;
