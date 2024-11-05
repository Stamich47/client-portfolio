export default function GalleryCard({ image, onImageClick }) {
  return (
    <div className="gallery-card">
      <img src={image.url} alt={image.alt} onClick={onImageClick} />
      <div className="gallery-card-info"></div>
    </div>
  );
}
