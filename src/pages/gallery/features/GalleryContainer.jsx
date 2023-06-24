
import GalleryCard from "./GalleryCard";

function GalleryContainer({galleryImagesArr, containerClassName, containerStyling, cardClassName, sizes}) {
  const returnSize = (height) => {
    if (height <= 3500) {
      return "small";
    }

    if (height <= 5000 && height > 3500) {
      return "medium";
    }

    if (height > 5000 && height <= 10000) {
      return "large";
    }

    return;
  }

  return (
    <div
      className={containerClassName}
      style={{ ...containerStyling }}
    >
      {galleryImagesArr?.map((galleryProps) => (
        <GalleryCard
          size={returnSize(galleryProps.height)}
          className={cardClassName}
          row={sizes}
          imageUrl={galleryProps.urls.regular}
          key={galleryProps.id}
        />
      ))}
    </div>
  );
}

export default GalleryContainer;
