import axios from "axios";

const searchRequest = (url, params, setState) => {
  axios
    .get(url, {
      headers: {
        Authorization: import.meta.env.VITE_ACCESS_KEY,
      },
      params,
    })
    .then((res) => {
      if (!res.status === 200) {
        console.log(res.status, res.statusText);
      } else {
        setState(res.data.results);
        return res.data.results;
      }
    });
};

export { searchRequest };
