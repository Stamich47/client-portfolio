import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  const APIKEY = process.env.REACT_APP_IMG_API_KEY;
  const category = "graphic design";

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${category}&client_id=${APIKEY}&per_page=30`
      );
      const data = await response.json();

      const imageData = data.results.map((image) => {
        return {
          id: image.id,
          alt: image.alt_description,
          url: image.urls.regular,
          likes: image.likes,
        };
      });
      setGalleryImages(imageData);
    };

    fetchImages();
  }, [APIKEY]);

  console.log(galleryImages);

  return (
    <div className="container my-5">
      <div className="gallery">
        {galleryImages.map((image) => {
          return <GalleryCard key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
}
