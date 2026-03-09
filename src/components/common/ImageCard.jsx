import React from "react";
import { Link } from "react-router";

const ImageCard = ({ title, description, image }) => {
  return (
    <div className="flex-1" data-aos="fade-down" data-aos-delay="400">
      <div className="transition-colors duration-200 flex flex-col p-3 xs:p-3.5 md:p-4 xl:p-5 bg-(--color-bg-primary) dark:bg-(--color-bg-dark) rounded-md gap-3 xs:gap-3.5 md:gap-4 xl:gap-5 drop-shadow-sm flex-1 h-full">
        <Link
          to="/ceramics"
          className="inset-0 rounded-md max-h-72 block overflow-hidden"
        >
          <img
            src={image}
            alt="Hands-On Learning"
            className="w-full h-full object-cover rounded-md transition-transform duration-400 ease-in-out hover:scale-105"
          />
        </Link>

        <div className="flex flex-col items-start justify-center gap-0.5 xs:gap-1 md:gap-1.5 lg:gap-2 xl:gap-3">
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
