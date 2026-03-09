import React from "react";
import { Link } from "react-router";

const ImageCardSmall = ({
  to,
  image,
  title,
  description,
  aosDelay,
  className,
}) => {
  return (
    <div
      className={`flex-1 min-w-0 ${className || ""}`}
      data-aos="fade-down"
      data-aos-delay={aosDelay}
    >
      {/* Simplified to just flex-col everywhere */}
      <div className="flex flex-col bg-(--color-bg-primary) dark:bg-(--color-bg-dark) drop-shadow-md rounded-md min-w-0 flex-1 transition-colors duration-200 h-full">
        <Link
          to={to}
          // Stripped all the complex md/sm width and rounding logic
          className="inset-0 w-full aspect-video block overflow-hidden rounded-t-md"
        >
          <img
            src={image}
            alt={title || "Card image"}
            className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
          />
        </Link>
        <div className="flex flex-col justify-start items-start lg:gap-3 md:gap-2 sm:gap-1.5 gap-1.5 flex-1 lg:p-5 md:p-3.5 sm:p-3.5 p-3.5">
          <h1 className="lg:text-xl md:text-lg sm:text-base text-base font-bold text-(--color-dark-text) dark:text-white w-full line-clamp-2">
            {title}
          </h1>
          <p className="w-full text-start lg:text-base md:text-sm sm:text-xs text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary)">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCardSmall;
