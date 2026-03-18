import React from "react";

// Internal skeleton mimicking ImageCardSmall.jsx
const ImageCardSmallSkeleton = () => (
  // Card Wrapper
  <div className="flex flex-col bg-(--color-bg-primary) dark:bg-(--color-bg-dark) drop-shadow-md rounded-md min-w-0 flex-1 h-full w-full">
    {/* Image Placeholder (Matches aspect-video) */}
    <div className="block w-full aspect-video rounded-t-md bg-gray-200 dark:bg-gray-700 animate-pulse shrink-0"></div>

    {/* Content Wrapper */}
    <div className="flex flex-col justify-start items-start gap-1.5 xs:gap-2 md:gap-2.5 flex-1 p-3 xs:p-3.5 md:p-4 xl:p-5 w-full">
      {/* Title Placeholder (1 Line) */}
      <div className="h-4 md:h-5 lg:h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>

      {/* Description Placeholder (2 Lines) */}
      <div className="flex flex-col gap-1 w-full mt-1">
        <div className="w-full h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        <div className="w-4/5 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      </div>
    </div>
  </div>
);

const ProcessSkeleton = () => {
  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-7 xl:gap-8 w-full max-w-7xl">
          {/* Section Header Skeleton (Title Only) */}
          <div className="flex flex-col justify-center items-center w-full">
            <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse"></div>
          </div>

          {/* Carousel Skeleton */}
          <div className="w-full mt-2">
            {/* Carousel Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full">
              {/* Card 1: Always visible */}
              <div className="block w-full">
                <ImageCardSmallSkeleton />
              </div>

              {/* Card 2: Hidden on mobile, visible on sm and up */}
              <div className="hidden sm:block w-full">
                <ImageCardSmallSkeleton />
              </div>

              {/* Card 3: Hidden on mobile and tablet, visible on lg and up */}
              <div className="hidden lg:block w-full">
                <ImageCardSmallSkeleton />
              </div>
            </div>

            {/* Carousel Navigation Skeleton */}
            <div className="flex flex-col items-center gap-4 mt-8 md:mt-10 lg:mt-12 w-full">
              {/* Dots Skeleton */}
              <div className="flex flex-wrap justify-center gap-2 px-4 w-full max-w-md">
                <div className="h-2 w-6 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block lg:hidden"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block sm:hidden"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block sm:hidden"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block sm:hidden"></div>
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
      </div>
    </section>
  );
};

export default ProcessSkeleton;
