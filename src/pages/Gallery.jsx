// Gallery.jsx
import React, { useState, useEffect } from "react";
import { loadWorkshopImages } from "../data/Workshops/workshopImages";
import { useTranslation } from "react-i18next";

// Isolate the loading state to the individual image to prevent parent re-renders
const GalleryImage = ({ src, index, spanClass, responsiveClasses }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      data-index={index}
      data-aos="fade-down"
      data-aos-delay={300 + index * 50}
      data-aos-offset="0"
      className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-200 dark:bg-gray-800 ${spanClass} ${responsiveClasses}`}
      style={{
        minHeight: "200px",
        // Tells the browser to skip layout/painting if this is off-screen
        contentVisibility: "auto",
        containIntrinsicSize: "200px", // Gives the browser a placeholder size
      }}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
      )}

      {!hasError ? (
        <img
          src={src}
          alt={`Gallery image ${index + 1}`}
          loading="lazy"
          decoding="async" /* <--- THIS IS THE MAGIC BULLET FOR THE FREEZES */
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          // Adding a fetchpriority hint for above-the-fold vs below-the-fold
          fetchPriority={index < 4 ? "high" : "low"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
          Image not available
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const { t } = useTranslation("gallery");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const workshopImages = await loadWorkshopImages();
      setImages(workshopImages.map((img) => img.src));
    };
    fetchImages();
  }, []);

  const getSpanClass = (index) => {
    if (index === 0) return "col-span-2 row-span-2";
    if (index === 4) return "col-span-1 row-span-2";
    return "col-span-1 row-span-1";
  };

  return (
    <div className="bg-(--color-bg-primary) w-full">
      <div className="w-full p-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 justify-evenly items-center flex-1 w-full">
            <h1
              className="font-bold text-4xl text-(--color-dark-text) dark:text-white"
              data-aos="fade-up"
            >
              {t("gallery.title")}
            </h1>

            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-dense">
                {images.slice(0, 10).map((image, index) => {
                  const spanClass = getSpanClass(index);
                  const responsiveClasses = `
                    ${index === 8 ? "lg:col-span-2" : ""} 
                    ${index === 9 ? "md:col-span-2 lg:col-span-2" : ""}
                  `;

                  return (
                    <GalleryImage
                      key={index}
                      src={image}
                      index={index}
                      spanClass={spanClass}
                      responsiveClasses={responsiveClasses}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
