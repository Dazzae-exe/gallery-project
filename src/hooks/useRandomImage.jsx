import { useEffect, useState } from "react";
import { fetchSingleImage } from "../utils/FetchPhoto";

const initialValue = {
  data: {},
};

export const useRandomImage = () => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        setState({
          ...state,
          data: await fetchSingleImage(),
        });

        return state;
      } catch (error) {
        console.log(error);
      }

      return state;
    };

    fetchImg();
  }, []);

  return state;
};
