import { useEffect, useRef, useState } from "react";
import { useRandomImage } from "../hooks/useRandomImage";
import { useInitialValue } from "../hooks/useInitialValue";
import { useRecoilState } from "recoil";
import { GalleryBoxState } from "../lib/recoiljs/GalleryBoxState";
import { fetchSearchSubmit } from "../utils/FetchSearchSubmit";

const SearchBox = () => {
  // eliminar scrollbar background and make it smooth


  const form = useRef(null);
  const { state, addSearchTarget } = useInitialValue();
  const [galleryBoxState, setGalleryBoxState] = useRecoilState(GalleryBoxState);

  const randomImg = useRandomImage();
  const [bgImg, setBgImg] = useState("");
  useEffect(() => {
    const handleImage = async () => {
      setBgImg(await randomImg.data.urls.regular);

      return bgImg;
    };

    handleImage();
  });
  

  const setSearchTarget = () => {
    const formData = new FormData(form.current);
    const searchInput = formData.get("searchInput");

    return addSearchTarget(searchInput);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setGalleryBoxState(
      await fetchSearchSubmit(state.searchTarget),
    );

    return galleryBoxState;
  };

  return (
    <section className="container mx-auto w-full h-fit">
      <div
        className={`relative w-full h-60 rounded-2xl dark:bg-zinc-700 flex items-center justify-center overflow-hidden`}
      >
        {bgImg ? (
          <img
            src={bgImg}
            alt="home bg"
            className="w-full h-60 absolute object-center object-cover top-0 left-0"
            loading="lazy"
          />
        ) : (
          ""
        )}

        <form
          method="get"
          className="relative w-60 md:w-96 h-fit"
          ref={form}
          onSubmit={(evt) => handleSubmit(evt)}
        >
          <input
            type="text"
            name="searchInput"
            className="w-full rounded-2xl h-12 backdrop-blur-md bg-white/70 text-black pl-2 pr-20 placeholder:text-gray-500 outline-none"
            placeholder="Pick something..."
            onChange={setSearchTarget}
          />
          <input
            type="submit"
            value="search"
            className="right-2 top-1.5 py-1.5 absolute bg-gray-200 rounded-2xl text-black px-2"
          />
        </form>
      </div>
    </section>
  );
};

export default SearchBox;
