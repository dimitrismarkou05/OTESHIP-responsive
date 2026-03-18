import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../common/SectionHeader";
import Carousel from "../../common/Carousel";
import { loadRandomProductImages } from "../../../data/Workshops/workshopImages";

const CarouselCard = ({ src, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      to="/gallery"
      className="block w-full h-full overflow-hidden rounded-md drop-shadow-md relative bg-gray-200 dark:bg-gray-800"
    >
      <div
        className={`absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse transition-opacity duration-400 ease-in-out ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {src && !hasError && (
        <img
          src={src}
          alt={`Product image ${index + 1}`}
          loading="lazy" // Native browser lazy loading
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-400 ease-in-out hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
          Image not available
        </div>
      )}
    </Link>
  );
};

const CeramicsSection = () => {
  const { t } = useTranslation("home");
  const [randomImages, setRandomImages] = useState(Array(6).fill(null));

  useEffect(() => {
    const loadImages = async () => {
      // Just ask for 6 random images. The file handles the rest!
      const images = await loadRandomProductImages(6);
      const imageUrls = images.map((img) => img.src);
      setRandomImages(imageUrls);
    };

    loadImages();
  }, []);

  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10 max-w-7xl mx-auto w-full">
        <SectionHeader
          title={t("ceramics.title")}
          description={t("ceramics.description")}
        />

        <div className="w-full mt-4">
          <Carousel
            items={randomImages}
            gridContainerStyle={{ height: "256px" }}
            renderItem={(image, index) => (
              <CarouselCard src={image} index={index} key={index} />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default CeramicsSection;
