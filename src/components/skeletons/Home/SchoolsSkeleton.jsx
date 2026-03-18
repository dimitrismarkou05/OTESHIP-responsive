import React from "react";

// Internal skeleton perfectly matched to SchoolCard.jsx
const SchoolCardSkeleton = () => (
  <div className="flex flex-col md:flex-row lg:flex-col bg-white dark:bg-(--color-dark2-text) drop-shadow-md rounded-md min-w-0 flex-1 h-full w-full">
    {/* Image placeholder needs to be distinct from the content area */}
    <div className="block w-full aspect-video md:w-1/2 lg:w-full rounded-t-md md:rounded-none md:rounded-l-md lg:rounded-none lg:rounded-t-md bg-gray-200 dark:bg-gray-800 animate-pulse shrink-0"></div>

    <div className="flex flex-col justify-start items-start gap-1.5 xs:gap-2 md:gap-2.5 flex-1 p-3 xs:p-3.5 md:p-4 xl:p-5 w-full">
      <div className="flex flex-col gap-1 w-full">
        <div className="h-4 md:h-5 lg:h-6 w-full bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
        <div className="h-4 md:h-5 lg:h-6 w-5/6 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="w-full h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
        <div className="w-11/12 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
        <div className="w-4/5 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse block md:hidden lg:block"></div>
      </div>

      <div className="mt-auto flex flex-row items-center gap-1.5 pt-1">
        <div className="w-3 h-3 md:w-4 md:h-4 lg:h-5 lg:w-5 rounded-full bg-gray-200 dark:bg-gray-600 animate-pulse shrink-0"></div>
        <div className="w-20 md:w-24 lg:w-32 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
      </div>
    </div>
  </div>
);

const SchoolsSkeleton = () => {
  return (
    // Exact padding from SchoolsSection.jsx
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 w-full overflow-hidden">
      {/* Exact Wrapper Gap */}
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        {/* Section Header Skeleton */}
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 w-full">
          {/* Title */}
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

          {/* Description Paragraph with gap-1 offset heights */}
          <div className="flex flex-col items-center gap-1 w-full max-w-3xl">
            <div className="h-4 md:h-5 xl:h-6 w-[90%] max-w-lg bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            <div className="h-4 md:h-5 xl:h-6 w-4/5 max-w-md bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            <div className="h-4 md:h-5 xl:h-6 w-2/3 max-w-sm bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse block sm:hidden"></div>
          </div>
        </div>

        {/* Complex Responsive Grid matching SchoolsSection.jsx exactly */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 md:flex md:flex-col lg:flex-row items-stretch justify-center gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full max-w-7xl md:max-w-2xl lg:max-w-7xl">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-full max-w-sm mx-auto sm:max-w-none flex justify-center lg:flex-1 ${
                index === 2 ? "sm:col-span-2 sm:col-start-2" : "sm:col-span-2"
              }`}
            >
              <SchoolCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSkeleton;
