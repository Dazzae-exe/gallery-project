import axios from "axios";

export const fetchSearchSubmit = async (query) => {
  const url = `${import.meta.env.VITE_SEARCH_IMAGES_URL}${query}`;
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  console.log(url);

  const response = await axios.get(url, {
    headers: {
      Authorization: accessKey,
      Accept: "*/*",
      "Accept-Version": "v1",
    },
  }).then((response) => {
    const { data } = response;
    const { results } = data;
    console.log(results);

    return results;
  }).catch(error => {
    console.log(error);
  }).finally(() => console.log('All correct'));

  return response;
};
