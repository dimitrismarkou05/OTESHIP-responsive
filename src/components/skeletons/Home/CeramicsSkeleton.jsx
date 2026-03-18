import React from "react";

const CeramicsSkeleton = () => {
  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10 max-w-7xl mx-auto w-full">
        {/* 1. Section Header Skeleton (Exact gap-1 md:gap-2 lg:gap-3 xl:gap-4) */}
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 w-full">
          {/* Title: text-lg (h-7) md:text-2xl (h-8) lg:text-3xl (h-9) xl:text-4xl (h-10) */}
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse"></div>

          {/* Description: 3-line responsive wrapping with gap-1 offset heights */}
          <div className="flex flex-col items-center gap-1 w-full max-w-3xl">
            <div className="h-4 md:h-5 xl:h-6 w-[90%] max-w-lg bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
            <div className="h-4 md:h-5 xl:h-6 w-4/5 max-w-md bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
            <div className="h-4 md:h-5 xl:h-6 w-2/3 max-w-sm bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse block sm:hidden"></div>
          </div>
        </div>

        {/* 2. Carousel Wrapper (Matches w-full mt-4) */}
        <div className="w-full mt-4">
          {/* Carousel Grid (Matches height: 256px and dynamic cardsPerPage) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full h-64">
            {/* Card 1: Always visible */}
            <div className="block w-full h-full rounded-md drop-shadow-md bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

            {/* Card 2: Hidden on mobile, visible on sm and up */}
            <div className="hidden sm:block w-full h-full rounded-md drop-shadow-md bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

            {/* Card 3: Hidden on mobile and tablet, visible on lg and up */}
            <div className="hidden lg:block w-full h-full rounded-md drop-shadow-md bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>

          {/* Carousel Navigation Skeleton */}
          <div className="flex flex-col items-center gap-4 mt-8 md:mt-10 lg:mt-12 w-full">
            {/* Dots Skeleton (Matches 6 items total -> 6 pages on mobile, 3 on tablet, 2 on desktop) */}
            <div className="flex flex-wrap justify-center gap-2 px-4 w-full max-w-md">
              {/* Dot 1: Active */}
              <div className="h-2 w-6 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse"></div>

              {/* Dot 2: Always visible (Page 2) */}
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>

              {/* Dot 3: Hidden on desktop, visible on mobile & tablet (Page 3) */}
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse block lg:hidden"></div>

              {/* Dots 4, 5, 6: Hidden on tablet & desktop, visible ONLY on mobile (Pages 4-6) */}
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse block sm:hidden"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse block sm:hidden"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse block sm:hidden"></div>
            </div>

            {/* Prev/Next Buttons Skeleton */}
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-white dark:bg-(--color-dark2-text) shadow-md w-9 h-9 flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
              </div>
              <div className="p-2 rounded-full bg-white dark:bg-(--color-dark2-text) shadow-md w-9 h-9 flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeramicsSkeleton;
