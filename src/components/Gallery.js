import GalleryCard from "./GalleryCard";

export default function Gallery({ galleryImages, onImageClick }) {
  return (
    <div className="container my-5">
      <div className="gallery">
        {galleryImages.map((image) => {
          return (
            <GalleryCard
              key={image.id}
              image={image}
              onImageClick={onImageClick}
            />
          );
        })}
      </div>
    </div>
  );
}
