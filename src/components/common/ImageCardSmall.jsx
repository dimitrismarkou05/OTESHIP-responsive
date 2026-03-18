import React from "react";
import { Link } from "react-router";

const ImageCardSmall = ({ to, image, title, description, className }) => {
  return (
    <div className={`flex-1 min-w-0 ${className || ""}`}>
      <div className="flex flex-col bg-(--color-bg-primary) dark:bg-(--color-bg-dark) drop-shadow-md rounded-md min-w-0 flex-1 transition-colors duration-200 h-full">
        <Link
          to={to}
          className="inset-0 w-full aspect-video block overflow-hidden rounded-t-md"
        >
          <img
            src={image}
            alt={title || "Card image"}
            className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
          />
        </Link>
        <div className="flex flex-col justify-start items-start gap-1.5 xs:gap-2 md:gap-2.5 flex-1 p-3 xs:p-3.5 md:p-4 xl:p-5">
          <h1 className="text-sm md:text-base lg:text-lg font-bold text-(--color-dark-text) dark:text-white w-full line-clamp-2">
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

export default ImageCardSmall;
