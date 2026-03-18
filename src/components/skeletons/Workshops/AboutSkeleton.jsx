import React from "react";

// Internal skeleton mimicking WorkshopCardBig.jsx
const WorkshopCardBigSkeleton = ({ imagePosition = "left" }) => (
  <div
    className={`flex flex-col md:flex-row items-stretch justify-between w-full flex-1 gap-5 md:gap-6 lg:gap-7 xl:gap-8 sm:max-w-lg mx-0 sm:mx-auto md:mx-0 md:max-w-none ${
      imagePosition === "right" ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Image Placeholder 
        Uses aspect-video across all sizes to force the empty div to hold the shape. */}
    <div className="w-full md:w-[45%] aspect-video max-h-56 sm:max-h-64 md:max-h-none lg:max-h-80 overflow-hidden rounded-md shrink-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

    {/* Content Wrapper */}
    <div className="flex flex-col justify-start items-start flex-1 gap-2 xs:gap-3 md:gap-3.5">
      {/* Title Container */}
      <div className="flex flex-col justify-center items-start gap-2 xs:gap-2.5 md:gap-3 w-full">
        <div className="h-5 md:h-6 lg:h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      </div>

      {/* Description Placeholder (5 Lines) */}
      <div className="flex flex-col gap-1.5 w-full max-w-3xl mt-1">
        <div className="w-full h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        <div className="w-full h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        <div className="w-11/12 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        <div className="w-4/5 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        {/* Added 5th line here */}
        <div className="w-3/4 h-3 md:h-4 lg:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      </div>

      {/* Outcomes section intentionally omitted per instructions */}
    </div>
  </div>
);

const AboutSkeleton = () => {
  return (
    <section
      className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 scroll-mt-8"
      id="workshops-skeleton"
    >
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10 max-w-7xl mx-auto w-full">
        {/* Section Header Skeleton (Title Only) */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        {/* Workshop Cards List Container */}
        <div className="flex flex-col gap-8 lg:gap-10 xl:gap-12 w-full">
          {/* Simulating 3 workshop cards, alternating positions */}
          {[0, 1, 2].map((index) => (
            <WorkshopCardBigSkeleton
              key={index}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
