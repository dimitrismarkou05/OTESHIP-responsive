import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const ImageCard = ({ title, description, image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // If the image prop changes (e.g., loads asynchronously), reset the loaded state
  useEffect(() => {
    if (image) {
      setIsLoaded(false);
    }
  }, [image]);

  return (
    <div className="flex-1">
      <div className="transition-colors duration-200 flex flex-col p-3 xs:p-3.5 md:p-4 xl:p-5 bg-(--color-bg-primary) dark:bg-(--color-bg-dark) rounded-md gap-3.5 md:gap-4 lg:gap-4.5 drop-shadow-sm flex-1 h-full">
        {/* Replaced min-h-72 with aspect ratios. This prevents layout collapse 
          while loading, but allows the image to scale down cleanly on small screens. 
        */}
        <Link
          to="/ceramics"
          className="relative block w-full rounded-md overflow-hidden aspect-4/3 xs:aspect-video max-h-72 bg-gray-200 dark:bg-gray-800"
        >
          {/* Pulsing Skeleton Overlay */}
          <div
            className={`absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse transition-opacity duration-400 ease-in-out ${
              isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />

          {image && (
            <img
              src={image}
              alt={title}
              onLoad={() => setIsLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover rounded-md transition-all duration-400 ease-in-out hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </Link>

        <div className="flex flex-col items-start justify-center gap-1.5 xs:gap-2 md:gap-2.5">
          <h1 className="text-sm md:text-base lg:text-lg font-bold text-(--color-dark-text) dark:text-white w-full">
            {title}
          </h1>
          <p className="w-full text-start text-xs md:text-sm lg:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary)">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
