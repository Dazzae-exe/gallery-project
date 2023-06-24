import React from "react";
import GalleryCard from "./GalleryCard";

function GalleryContainer(props) {
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
      className={props.containerClassName}
      style={{ ...props.containerStyling }}
    >
      {props.galleryImagesArr.map((galleryProps) => (
        <GalleryCard
          size={returnSize(galleryProps.height)}
          className={props.cardClassName}
          row={props.sizes}
          imageUrl={galleryProps.urls.regular}
          key={galleryProps.id}
        />
      ))}
    </div>
  );
}

export default GalleryContainer;
