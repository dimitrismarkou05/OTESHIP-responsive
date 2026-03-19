import React, { useState, useEffect } from "react";

const Carousel = ({
  items,
  renderItem,
  gridContainerStyle = {},
  gridContainerClassName = "",
}) => {
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
  const totalCards = items?.length || 0;
  const totalPages = Math.ceil(totalCards / cardsPerPage) || 1;

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerPage(1);
      } else if (width < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
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

  // --- True Instagram/iOS Dot State Calculation ---
  const getDotState = (index) => {
    if (totalPages <= 5) {
      return index === currentPage ? "active" : "normal";
    }

    // Determine the 5-dot window based on current page
    const start = Math.max(0, Math.min(currentPage - 2, totalPages - 5));
    const end = start + 4;

    if (index < start || index > end) return "hidden";
    if (index === currentPage) return "active";
    if (index === start && start !== 0) return "ghost"; // Leftmost visible dot shrinks to ghost
    if (index === end && end !== totalPages - 1) return "ghost"; // Rightmost visible dot shrinks to ghost

    return "normal";
  };

  return (
    <div className="w-full">
      <div
        className={`grid gap-4 md:gap-5 lg:gap-6 transition-all duration-300 w-full touch-pan-y ${gridContainerClassName}`}
        style={{
          gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
          ...gridContainerStyle,
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, index) => {
          const isVisible =
            index >= currentPage * cardsPerPage &&
            index < (currentPage + 1) * cardsPerPage;

          return (
            <div
              key={index}
              className={`w-full h-full flex flex-col transition-all duration-300 ${
                isVisible
                  ? "opacity-100 visible pointer-events-auto"
                  : "opacity-0 invisible h-0 overflow-hidden pointer-events-none"
              }`}
              style={{
                gridRow: "1",
                gridColumn: `${(index % cardsPerPage) + 1} / span 1`,
              }}
            >
              {renderItem(item, index, isVisible)}
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-4 mt-8 md:mt-10 lg:mt-12 w-full">
          {/* We remove standard gaps and use margins on the dots instead so hidden dots don't take up space */}
          <div className="flex justify-center items-center h-6 w-full max-w-md overflow-visible">
            {Array.from({ length: totalPages }).map((_, index) => {
              const state = getDotState(index);

              let classes =
                "rounded-full transition-all duration-300 ease-in-out cursor-pointer ";

              if (state === "active") {
                classes += "w-6 h-2 bg-blue-600 opacity-100 mx-1";
              } else if (state === "normal") {
                classes +=
                  "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 opacity-100 mx-1";
              } else if (state === "ghost") {
                classes +=
                  "w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 opacity-50 mx-1";
              } else {
                // Completely collapses the dot so it vanishes from the layout
                classes += "w-0 h-0 opacity-0 mx-0 pointer-events-none";
              }

              return (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={classes}
                  aria-label={`Go to page ${index + 1}`}
                />
              );
            })}
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
  );
};

export default Carousel;
