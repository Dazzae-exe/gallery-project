import { useState } from "react";

const initialValue = {
  searchTarget: "",
};

export const useInitialValue = () => {
  const [state, setState] = useState(initialValue);

  const addSearchTarget = (input) => {
    setState({
      ...state,
      searchTarget: input,
    });

    return state;
  };

  return {
    state,
    addSearchTarget
  };
};
