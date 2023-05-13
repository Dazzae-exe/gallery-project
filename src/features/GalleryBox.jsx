import ImageBox from "../components/ImageBox";
import { useRecoilValue } from "recoil";
import { GetGalleryBoxState } from "../lib/recoiljs/GalleryBoxState";

const GalleryBox = () => {
  const getFetchValue = useRecoilValue(GetGalleryBoxState);

  console.log(getFetchValue);

  return (
    <section className="w-full h-full">
      <div className="container mx-auto w-full h-full grid grid-cols-12 items-center gap-8 flex-wrap overflow-y-scroll py-4 scrollbar-none">
        {getFetchValue.length > 0
          ? getFetchValue.map((search) => (
              <ImageBox
                key={search.id}
                views={search.likes}
                downloadLink={search.links.download}
                imgUrl={search.urls.regular}
              />
            ))
          : ""}
      </div>
    </section>
  );
};

export default GalleryBox;
