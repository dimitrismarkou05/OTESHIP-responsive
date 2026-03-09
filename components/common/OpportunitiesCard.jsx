const OpportunitiesCard = ({
  icon,
  title,
  description,
  aosDelay,
  className,
}) => {
  return (
    <div
      className={`w-full h-full ${className || ""}`}
      data-aos="fade-down"
      data-aos-delay={aosDelay}
    >
      <div className="flex flex-col justify-center items-center gap-0.5 xs:gap-1 md:gap-1.5 lg:gap-2 xl:gap-3 bg-white/10 drop-shadow-md rounded-md p-3 xs:p-3.5 md:p-4 xl:p-5 min-w-0 transition-colors duration-200 h-full w-full mx-auto">
        <i
          className={`${icon} text-base xs:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 text-(--color-gold) dark:text-(--color-gold2) transition-transform duration-300 group-hover:scale-110`}
        ></i>
        <h1 className="text-sm xs:text-base md:text-lg xl:text-xl font-bold text-white w-full text-center">
          {title}
        </h1>
        <p className="w-full text-center text-xs md:text-sm xl:text-base text-(--color-bg-primary)">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
