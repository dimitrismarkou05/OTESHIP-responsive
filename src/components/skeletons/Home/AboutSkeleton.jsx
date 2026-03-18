import React from "react";

// Internal skeleton for the feature cards
const FeatureCardSkeleton = () => (
  <div className="flex flex-col justify-start items-start gap-1.5 xs:gap-2 md:gap-2.5 bg-white dark:bg-(--color-dark2-text) drop-shadow-md rounded-md p-3 xs:p-3.5 md:p-4 xl:p-5 h-full w-full mx-auto">
    {/* Use a lighter gray in dark mode so it's visible against the card bg */}
    <div className="w-4 h-4 xs:w-4.5 xs:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse shrink-0"></div>

    <div className="w-2/3 h-5 md:h-6 lg:h-7 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>

    <div className="flex flex-col gap-1 w-full">
      <div className="w-full h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
      <div className="w-11/12 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
      <div className="w-4/5 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
    </div>
  </div>
);

const AboutSkeleton = () => {
  return (
    // Exact same padding as AboutSection.jsx
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      {/* Exact gap-6 md:gap-8 lg:gap-9 xl:gap-10 matches AboutSection main wrapper */}
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        {/* Section Header Skeleton (Exact gap-1 md:gap-2 lg:gap-3 xl:gap-4 matches SectionHeader.jsx) */}
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 w-full">
          {/* Title Placeholder (Matches text-lg md:text-2xl lg:text-3xl xl:text-4xl) */}
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

          {/* Description Placeholder - Responsive Line Wrapping with reduced heights to offset gap-1 */}
          <div className="flex flex-col items-center gap-1 w-full max-w-3xl">
            {/* Line 1: Always visible (Matches text-sm md:text-base xl:text-lg) */}
            <div className="h-4 md:h-5 xl:h-6 w-[90%] max-w-lg bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>

            {/* Line 2: Always visible */}
            <div className="h-4 md:h-5 xl:h-6 w-4/5 max-w-md bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>

            {/* Line 3: Visible on mobile, hidden from 'sm' (640px) upwards */}
            <div className="h-4 md:h-5 xl:h-6 w-2/3 max-w-sm bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse block sm:hidden"></div>
          </div>
        </div>

        {/* Exact 4-column math trick layout matching AboutSection.jsx */}
        <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-3 gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl w-full mx-auto auto-rows-fr">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-full flex justify-center h-full ${
                index === 2
                  ? "xs:col-span-2 xs:col-start-2 md:col-span-1 md:col-start-auto"
                  : "xs:col-span-2 md:col-span-1"
              }`}
            >
              <FeatureCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
