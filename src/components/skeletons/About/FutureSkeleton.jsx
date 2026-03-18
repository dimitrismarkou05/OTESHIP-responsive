import React from "react";

const FutureSkeleton = () => {
  return (
    // Exact padding, background, and overflow classes from FutureSection.jsx
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 overflow-hidden">
      {/* Section Header Skeleton */}
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5 w-full">
        {/* Title Placeholder */}
        <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse shrink-0 mb-1"></div>

        {/* Description Placeholder - 5 lines with a shorter final line */}
        <div className="flex flex-col items-center gap-1.5 w-full max-w-3xl">
          <div className="h-4 md:h-5 xl:h-6 w-[95%] bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
          <div className="h-4 md:h-5 xl:h-6 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
          <div className="h-4 md:h-5 xl:h-6 w-[90%] bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
          <div className="h-4 md:h-5 xl:h-6 w-[80%] bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>

          {/* Shorter final line */}
          <div className="h-4 md:h-5 xl:h-6 w-1/2 md:w-2/5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default FutureSkeleton;
