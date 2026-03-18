import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { loadRandomWorkshopImages } from "../../../data/Workshops/workshopImages";

const AboutSection = () => {
  const { t } = useTranslation("about");
  const paragraphs = t("about.paragraphs", { returnObjects: true });

  const [randomImage, setRandomImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchRandomImage = async () => {
      const images = await loadRandomWorkshopImages(1);
      if (images && images.length > 0) {
        setRandomImage(images[0].src);
      }
    };

    fetchRandomImage();
  }, []);

  // Reset loading state if the image source changes
  useEffect(() => {
    if (randomImage) {
      setIsLoaded(false);
    }
  }, [randomImage]);

  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5 lg:gap-6 xl:gap-8 w-full max-w-7xl">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 xl:gap-8 justify-evenly flex-1 w-full">
            <h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-(--color-dark-text) dark:text-white">
              {t("about.title")}
            </h1>
            {paragraphs.map((item, index) => (
              <p
                className="text-sm md:text-base xl:text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary)"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>

          <Link
            to="/ceramics"
            className="relative rounded-md w-full max-w-lg md:max-w-xl mx-auto lg:mx-0 lg:max-w-100 block overflow-hidden shrink-0 min-h-75 sm:min-h-100 bg-transparent"
          >
            {/* 1. Structural fix: If not loaded, render the pulsing skeleton */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse z-1" />
            )}

            {randomImage && (
              <img
                src={randomImage}
                alt="workshop"
                onLoad={() => setIsLoaded(true)}
                /* 2. Style fix: Removed opacity transition on image for immediate appearance.
                   The skeleton unmounting provides the transition effect. */
                className={`absolute inset-0 w-full h-full object-cover rounded-md transition-transform duration-400 ease-in-out hover:scale-105 ${
                  isLoaded ? "visible" : "invisible"
                }`}
              />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
