import React from "react";

// Internal skeleton mimicking SchoolCardBig.jsx
const SchoolCardBigSkeleton = ({ imagePosition = "left" }) => (
  <div
    className={`flex flex-col md:flex-row items-stretch justify-between w-full flex-1 gap-5 md:gap-6 lg:gap-7 xl:gap-8 sm:max-w-lg mx-0 sm:mx-auto md:mx-0 md:max-w-none ${
      imagePosition === "right" ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Image Placeholder
        We use aspect-video across all sizes here to force the empty div to hold 
        the shape of a real image, combining the wrapper and image height constraints. */}
    <div className="w-full md:w-[45%] aspect-video max-h-56 sm:max-h-64 md:max-h-none lg:max-h-80 rounded-md shrink-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>

    {/* Content Wrapper */}
    <div className="flex flex-col justify-start items-start flex-1 gap-2 xs:gap-3 md:gap-3.5">
      <div className="flex flex-col justify-center items-start gap-2 xs:gap-2.5 md:gap-3 w-full">
        {/* Title Placeholder (1 Line) */}
        <div className="h-5 md:h-6 lg:h-7 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>

        {/* Location Link Placeholder */}
        <div className="flex flex-row items-center gap-1.5 pt-1">
          {/* Map marker icon dot */}
          <div className="w-3 h-3 md:w-3.5 md:h-3.5 lg:h-4 lg:w-4 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse shrink-0"></div>
          {/* Country text */}
          <div className="w-20 md:w-24 lg:w-32 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Description Placeholder (4 Lines) */}
      <div className="flex flex-col gap-1 w-full max-w-3xl mt-1">
        {/* Lines 1 & 2: Same width (100%) */}
        <div className="w-full h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
        <div className="w-full h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>

        {/* Line 3: A bit smaller */}
        <div className="w-11/12 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>

        {/* Line 4: Smaller than the 3rd */}
        <div className="w-4/5 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
      </div>

      {/* "Learn More" Link Placeholder */}
      <div className="mt-auto pt-2">
        <div className="w-24 md:w-28 lg:w-32 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
      </div>
    </div>
  </div>
);

const SchoolsSkeleton = () => {
  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10 max-w-7xl mx-auto w-full">
        {/* Section Header Skeleton (Title Only) */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse"></div>
        </div>

        {/* Schools List Container */}
        <div className="flex flex-col gap-8 lg:gap-10 xl:gap-12 w-full">
          {/* Simulating 3 school cards, alternating positions */}
          {[0, 1, 2].map((index) => (
            <SchoolCardBigSkeleton
              key={index}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSkeleton;
