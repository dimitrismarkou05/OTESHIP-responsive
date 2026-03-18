import React from "react";

// Internal skeleton mimicking the CarouselCard
const CarouselCardSkeleton = () => (
  <div className="block w-full h-full overflow-hidden rounded-md drop-shadow-md relative bg-gray-200 dark:bg-gray-800">
    <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
  </div>
);

const GallerySkeleton = () => {
  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-start gap-2 md:gap-3 lg:gap-4 xl:gap-6 max-w-7xl mx-auto w-full">
        {/* Title Skeleton */}
        <div className="h-6 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse mt-1"></div>

        {/* Sub-header text & View More Link Skeleton */}
        <div className="flex flex-col md:flex-row w-full items-start md:items-end gap-4 xs:gap-5 md:gap-6 justify-between mt-2">
          {/* Paragraph (1 line only) */}
          <div className="w-full max-w-2xl h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>

          {/* "View More" Link */}
          <div className="text-start md:text-center h-fit mt-2 xs:mt-0 shrink-0">
            <div className="w-20 md:w-24 h-4 md:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
          </div>
        </div>

        {/* Carousel Mock Skeleton */}
        <div className="w-full mt-2">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full h-64">
            {/* Card 1: Always visible */}
            <div className="w-full h-full">
              <CarouselCardSkeleton />
            </div>
            {/* Card 2: Visible on sm and up */}
            <div className="hidden sm:block w-full h-full">
              <CarouselCardSkeleton />
            </div>
            {/* Card 3: Visible on lg and up */}
            <div className="hidden lg:block w-full h-full">
              <CarouselCardSkeleton />
            </div>
          </div>

          {/* Navigation Controls Skeleton */}
          <div className="flex flex-col items-center gap-4 mt-8 md:mt-10 lg:mt-12 w-full">
            {/* Dots Skeleton (Matches ProcessSkeleton responsive logic) */}
            <div className="flex flex-wrap justify-center gap-2 px-4 w-full max-w-md">
              <div className="h-2 w-6 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block lg:hidden"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block sm:hidden"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block sm:hidden"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse block sm:hidden"></div>
            </div>

            {/* Prev/Next Buttons Skeleton (Matches ProcessSkeleton/CeramicsSkeleton exactly) */}
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

export default GallerySkeleton;
