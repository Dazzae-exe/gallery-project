import axios from "axios";

export const fetchSingleImage = async () => {
  const urlSchema = import.meta.env.VITE_SINGLE_RANDOM_PHOTO_API;
  const auth = import.meta.env.VITE_ACCESS_KEY;

  const response = await axios
    .get(urlSchema, {
      headers: {
        Authorization: auth,
        Accept: "*/*",
        "Accept-Version": "v1",
      },
    })
    .then((res) => {
      const { data } = res;
      const { urls, views } = data;
      return { urls, views };
    })
    .catch((err) => console.error(err))
    .finally(() => console.log("Request donde"));

  return response;
};
