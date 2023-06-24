import { atom } from "recoil";

const searchState = atom({
  key: "SearchState",
  default: false,
});

export { searchState };
