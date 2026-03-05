import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { wsImagesArray } from "../../../data/Workshops/workshopImages";

const GallerySection = () => {
  const { t } = useTranslation("workshops");

  // Memoize random images so they only change when wsImagesArray changes
  const randomImages = wsImagesArray
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className="bg-white dark:bg-(--color-dark-text) py-20 px-4 transition-colors duration-200">
      <div
        className="flex flex-col justify-between items-start gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h1 className="font-bold text-4xl text-(--color-dark-text) dark:text-white text-center">
          {t("gallery.title")}
        </h1>
        <div className="flex flex-row w-full items-center justify-between">
          <p className="text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary)">
            {t("gallery.description")}
          </p>

          <div
            className="text-center h-fit"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <Link
              to="/gallery"
              className="text-(--color-primary) dark:text-(--color-primary2) text-sm font-semibold no-underline whitespace-nowrap inline-flex items-center justify-center hover-anim"
              style={{ "--hover-color": "var(--color-primary)" }}
            >
              {t("gallery.viewMore")}
            </Link>
          </div>
        </div>

        {/* Updated image container */}
        <div className="grid grid-cols-3 gap-8 w-full">
          {randomImages.map((image, index) => (
            <Link
              key={index}
              to="/gallery" // Add your actual link destination here
              className="block w-full h-64 overflow-hidden inset-0 rounded-md drop-shadow-md" // Fixed height for all containers
              data-aos="fade-down"
              data-aos-delay={300 + index * 150}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-400 ease-in-out hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
