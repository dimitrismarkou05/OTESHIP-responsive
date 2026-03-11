// GallerySection.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { loadWorkshopImages } from "../../../data/Workshops/workshopImages";

// Isolated carousel image card with skeleton logic
const CarouselCard = ({ src, index, isVisible, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`w-full h-64 transition-opacity duration-300 relative ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={style}
    >
      <Link
        to="/gallery"
        // Fixed h-full here instead of h-64 so it respects the parent's fixed height
        className="block w-full h-full overflow-hidden rounded-md drop-shadow-md relative bg-gray-200 dark:bg-gray-800"
        data-aos="fade-down"
        data-aos-delay={300 + index * 150} // v1 delays restored
      >
        <div
          className={`absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse transition-opacity duration-500 ease-in-out ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {src && !hasError && (
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
            decoding="async"
            // v1 hover scaling restored
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
    </div>
  );
};

const GallerySection = () => {
  const { t } = useTranslation("workshops");

  const [randomImages, setRandomImages] = useState(Array(6).fill(null));
  const [currentPage, setCurrentPage] = useState(0);

  const [cardsPerPage, setCardsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  });

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  const minSwipeDistance = 30;
  const totalCards = randomImages.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage) || 1;

  useEffect(() => {
    const loadImages = async () => {
      const images = await loadWorkshopImages();
      const imageUrls = images.map((img) => img.src);
      const shuffled = [...imageUrls].sort(() => 0.5 - Math.random());
      setRandomImages(shuffled.slice(0, 6));
    };

    loadImages();
  }, []);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerPage(1);
      else if (width < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };

    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    if (totalCards > 0 && currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [cardsPerPage, currentPage, totalPages, totalCards]);

  const handlePrev = () => setCurrentPage((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));

  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX || !touchStartY || !touchEndY) return;

    const distanceX = touchStartX - touchEndX;
    const distanceY = touchStartY - touchEndY;

    if (Math.abs(distanceY) > Math.abs(distanceX)) return;

    if (distanceX > minSwipeDistance && currentPage < totalPages - 1)
      handleNext();
    if (distanceX < -minSwipeDistance && currentPage > 0) handlePrev();
  };

  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      {/* Removed data-aos="fade-up" from this wrapper so it stops stretching your document */}
      <div className="flex flex-col justify-between items-start gap-2 md:gap-3 lg:gap-4 xl:gap-6 max-w-7xl mx-auto w-full">
        {/* Placed AOS directly on the inner elements for the exact same visual effect */}
        <h1
          className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-(--color-dark-text) dark:text-white text-center"
          data-aos="fade-up"
        >
          {t("gallery.title")}
        </h1>

        <div
          className="flex flex-col md:flex-row w-full items-start md:items-end gap-4 xs:gap-5 md:gap-6 justify-between"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-sm md:text-base xl:text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary)">
            {t("gallery.description")}
          </p>

          <div className="text-start md:text-center h-fit mt-2 xs:mt-0">
            <Link
              to="/gallery"
              className="text-(--color-primary) text-xs md:text-sm font-semibold no-underline whitespace-nowrap inline-flex items-center justify-center hover-anim"
              style={{ "--hover-color": "var(--color-primary)" }}
            >
              {t("gallery.viewMore")}
            </Link>
          </div>
        </div>

        {/* Re-added overflow-hidden & pb-4 ONLY to the track to catch AOS bleed from the cards, protecting the document */}
        <div className="w-full">
          <div
            className="grid gap-4 md:gap-5 lg:gap-6 transition-all duration-300 w-full touch-pan-y"
            style={{
              gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
              height: "256px", // Grid track height strictly locked
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {randomImages.map((image, index) => {
              const isVisible =
                index >= currentPage * cardsPerPage &&
                index < (currentPage + 1) * cardsPerPage;

              return (
                <CarouselCard
                  key={index}
                  src={image}
                  index={index}
                  isVisible={isVisible}
                  style={{
                    gridRow: "1",
                    gridColumn: `${(index % cardsPerPage) + 1} / span 1`,
                  }}
                />
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-4 mt-8 md:mt-10 lg:mt-12">
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? "w-6 bg-blue-600"
                        : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 0}
                  className={`p-2 rounded-full bg-white dark:bg-(--color-dark2-text) shadow-md transition-all ${
                    currentPage === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-110 cursor-pointer"
                  }`}
                  aria-label="Previous page"
                >
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages - 1}
                  className={`p-2 rounded-full bg-white dark:bg-(--color-dark2-text) shadow-md transition-all ${
                    currentPage === totalPages - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-110 cursor-pointer"
                  }`}
                  aria-label="Next page"
                >
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
