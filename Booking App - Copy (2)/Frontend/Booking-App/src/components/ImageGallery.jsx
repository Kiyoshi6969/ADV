
import React from "react";
import deluxe1 from "../assets/images/deluxe1.jpg";
import deluxe2 from "../assets/images/deluxe2.jpg";
import family_suite1 from "../assets/images/family_suite1.jpg";
import family_suite2 from "../assets/images/family_suite2.webp";
import family_suite3 from "../assets/images/family_suite3.jpg";
import standard1 from "../assets/images/standard1.jpg";
import standard2 from "../assets/images/standard2.webp";

const ImageGallery = () => {
  const images = [
    deluxe1,
    deluxe2,
    family_suite1,
    family_suite2,
    family_suite3,
    standard1,
    standard2,
  ];

  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Room ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;