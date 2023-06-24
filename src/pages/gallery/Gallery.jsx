// components
import GalleryContainer from "./features/GalleryContainer";

// imports
import useFetch from "../../hooks/useFetch";
import { styles, galleryParams } from "../../utils/GalleryJs";
import { useRecoilValue } from "recoil";
import { searchState } from "../../lib/recoiljs/SearchState";

function Gallery() {
  const searchedImages = useRecoilValue(searchState);

  const imagesGallery = useFetch(
    [],
    import.meta.env.VITE_PHOTOS_API,
    galleryParams.params
  );

  return (
    <div className="relative w-full h-fit p-0 rounded-xl">
      <GalleryContainer
        containerClassName={styles.pin_container.classNameTailwind}
        containerStyling={styles.pin_container.styling}
        cardClassName={styles.pin.classNameTailwind}
        sizes={styles.pin.sizes}
        galleryImagesArr={searchedImages === false ? imagesGallery.images : searchedImages}
      />
    </div>
  );
}

export default Gallery;
