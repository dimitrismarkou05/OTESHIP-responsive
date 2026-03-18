import React from "react";

const ImpactSkeleton = () => {
  return (
    <section
      className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 scroll-mt-16"
      id="impact-skeleton"
    >
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        {/* Section Header Skeleton */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        {/* Grid -> Flex layout perfectly matching ImpactSection.jsx */}
        <div className="grid grid-cols-2 w-full xs:flex xs:flex-row items-center justify-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-18 xl:gap-20 max-w-7xl">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 min-w-0"
            >
              {/* Large Number Skeleton */}
              <div className="h-9 md:h-10 lg:h-12 xl:h-16 w-12 sm:w-16 lg:w-20 xl:w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

              {/* Description Text Skeleton */}
              <div className="flex flex-col items-center gap-1 w-full mt-1">
                {/* Line 1: Always visible. Stretches wider on lg/xl to simulate a single line */}
                <div className="h-3 md:h-4 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>

                {/* Line 2: Simulates wrapped text. Hides completely on lg and up */}
                <div className="h-3 md:h-4 w-12 sm:w-16 md:w-20 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse block lg:hidden"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSkeleton;
