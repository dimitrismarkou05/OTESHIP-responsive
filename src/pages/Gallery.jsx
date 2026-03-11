import React, { useState, useEffect, useCallback } from "react";
import { loadWorkshopImages } from "../data/Workshops/workshopImages";
import { useTranslation } from "react-i18next";
import SectionHeader from "../components/common/SectionHeader";

const GalleryImage = ({
  src,
  index,
  spanClass,
  responsiveClasses,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      data-index={index}
      data-aos="fade-down"
      data-aos-delay={300 + index * 50}
      data-aos-offset="0"
      onClick={onClick}
      // REMOVED touch-pan-y so your browser's back-swipe navigation works again!
      className={`relative rounded-md overflow-hidden shadow-md cursor-pointer bg-gray-200 dark:bg-gray-800 ${spanClass} ${responsiveClasses} group`}
      style={{
        minHeight: "200px",
        contentVisibility: "auto",
        containIntrinsicSize: "200px",
      }}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
      )}

      {!hasError ? (
        <>
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            fetchPriority={index < 4 ? "high" : "low"}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </>
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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState("");

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const displayedImages = images.slice(0, 10);

  useEffect(() => {
    const fetchImages = async () => {
      const workshopImages = await loadWorkshopImages();
      setImages(workshopImages.map((img) => img.src));
    };
    fetchImages();
  }, []);

  // ADDED: Lock the underlying body scroll when the lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const openLightbox = (index) => {
    setSlideDirection("");
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setSlideDirection("");
  };

  const showNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setSlideDirection("next");
      setSelectedIndex((prev) => (prev + 1) % displayedImages.length);
    },
    [displayedImages.length],
  );

  const showPrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setSlideDirection("prev");
      setSelectedIndex((prev) =>
        prev === 0 ? displayedImages.length - 1 : prev - 1,
      );
    },
    [displayedImages.length],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    },
    [selectedIndex, showNext, showPrev],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      showNext();
    } else if (isRightSwipe) {
      showPrev();
    }
  };

  const getSpanClass = (index) => {
    if (index === 0) return "col-span-2 row-span-2";
    if (index === 4) return "col-span-1 row-span-2";
    return "col-span-1 row-span-1";
  };

  return (
    <div className="bg-(--color-bg-primary) w-full relative">
      <style>{`
        @keyframes slideInNext {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInPrev {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-next { animation: slideInNext 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .animate-slide-prev { animation: slideInPrev 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .animate-fade-scale { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>

      <div className="w-full p-6 xs:p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-6 justify-evenly items-center flex-1 w-full">
            <SectionHeader
              title={t("gallery.title")}
              description={"Test, i have images i have bitches also ok?"}
            />

            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-2 md:gap-4 grid-flow-dense">
                {displayedImages.map((image, index) => {
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
                      onClick={() => openLightbox(index)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-5000 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity touch-none"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-full max-w-7xl max-h-screen px-4 pt-20 pb-6 xs:px-16 xs:pt-24 xs:pb-8 md:px-24 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full min-h-0 relative">
              <img
                key={selectedIndex}
                src={displayedImages[selectedIndex]}
                alt={`Expanded view ${selectedIndex + 1}`}
                className={`max-w-full max-h-full object-contain rounded-sm shadow-2xl pointer-events-auto ${
                  slideDirection === "next"
                    ? "animate-slide-next"
                    : slideDirection === "prev"
                      ? "animate-slide-prev"
                      : "animate-fade-scale"
                }`}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div
              className="mt-4 text-white/70 text-sm tracking-widest shrink-0 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedIndex + 1} / {displayedImages.length}
            </div>
          </div>

          <button
            className="absolute top-4 right-4 xs:top-6 xs:right-6 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 transition-colors z-60 p-2 rounded-full cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button
            className="hidden md:flex w-12 h-12 items-center justify-center absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 transition-colors z-60 rounded-full cursor-pointer"
            onClick={showPrev}
            aria-label="Previous image"
          >
            <svg
              className="-translate-x-px"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className="hidden md:flex w-12 h-12 items-center justify-center absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 transition-colors z-60 rounded-full cursor-pointer"
            onClick={showNext}
            aria-label="Next image"
          >
            <svg
              className="translate-x-px"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
