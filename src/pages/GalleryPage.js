import Gallery from "../components/Gallery";
import GallerySearchBar from "../components/GallerySearchBar";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  const APIKEY = process.env.REACT_APP_IMG_API_KEY;
  const category = "graphic design";

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${category}&client_id=${APIKEY}&per_page=30`
      );
      const data = await response.json();
      console.log(data);

      const imageData = data.results.map((image) => {
        const RandomNumber = Math.floor(Math.random() * 3);

        const imageType = () => {
          if (RandomNumber === 0) {
            return "logo";
          } else if (RandomNumber === 1) {
            return "illustration";
          } else {
            return "design";
          }
        };

        return {
          id: image.id,
          alt: image.alt_description,
          url: image.urls.regular,
          likes: image.likes,
          type: imageType(),
          date: image.created_at,
        };
      });

      setGalleryImages(imageData);
      setFilteredImages(imageData);
    };

    fetchImages();
  }, [APIKEY]);

  const handleSort = (sortType) => {
    if (sortType === "popularity") {
      const sortedImages = [...galleryImages].sort((a, b) => b.likes - a.likes);
      setFilteredImages(sortedImages);
    } else if (sortType === "latest") {
      const sortedImages = [...galleryImages].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setFilteredImages(sortedImages);
    } else {
      setFilteredImages(galleryImages);
    }
  };

  const handleFilter = (filterType) => {
    const filteredData = galleryImages.filter(
      (image) => image.type === filterType
    );
    setFilteredImages(filteredData);
  };

  const onImageClick = (image) => {
    setImageSrc(image.target.src);
  };

  return (
    <div id="gallery" className="gallery-section">
      <GallerySearchBar
        onSort={handleSort}
        onFilter={handleFilter}
        imageSrc={imageSrc}
      />
      <Gallery galleryImages={filteredImages} onImageClick={onImageClick} />
    </div>
  );
}
