import React from "react";

const SectionHeader = ({
  title,
  description,
  titleColor = "text-(--color-dark-text) dark:text-white",
  descColor = "text-(--color-bg-dark) dark:text-(--color-bg-primary)",
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
      <h1
        className={`font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center ${titleColor}`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-sm md:text-base xl:text-lg max-w-3xl text-center ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
