export default function GalleryCard({ image }) {
  return (
    <div className="gallery-card">
      <img src={image.url} alt={image.alt} />
      <div className="gallery-card-info"></div>
    </div>
  );
}
