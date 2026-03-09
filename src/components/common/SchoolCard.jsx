import { Link } from "react-router";

const SchoolCard = ({
  to,
  image,
  title,
  description,
  country,
  location,
  aosDelay,
}) => {
  return (
    <div
      className="flex-1 min-w-0"
      data-aos="fade-down"
      data-aos-delay={aosDelay}
    >
      {/* Restored your exact flex layout classes */}
      <div className="flex lg:flex-col md:flex-row sm:flex-col flex-col bg-white dark:bg-(--color-dark2-text) drop-shadow-md rounded-md min-w-0 flex-1 transition-colors duration-200 h-full">
        <Link
          to={to}
          className="inset-0 lg:w-full md:w-1/2 sm:w-full w-full aspect-video block overflow-hidden rounded-t-md lg:rounded-t-md lg:rounded-l-none md:rounded-t-none md:rounded-l-md sm:rounded-t-md sm:rounded-l-none"
        >
          <img
            src={image}
            alt="Hands-On Learning"
            className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
          />
        </Link>

        {/* Applied the new xs-xl padding and gap scale */}
        <div className="flex flex-col justify-start items-start gap-0.5 xs:gap-1 md:gap-1.5 lg:gap-2 xl:gap-3 flex-1 p-3 xs:p-3.5 md:p-4 xl:p-5">
          {/* Applied the section-synced typography scale */}
          <h1 className="text-sm md:text-base lg:text-lg font-bold text-(--color-dark-text) dark:text-white w-full line-clamp-2">
            {title}
          </h1>
          <p className="w-full text-start text-xs md:text-sm lg:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary)">
            {description}
          </p>
          <Link
            to={location}
            className="text-xs md:text-sm lg:text-base link-container mt-auto flex flex-row items-center justify-center gap-1.5 text-(--color-primary) dark:text-(--color-primary2)"
          >
            <i className="fa-solid fa-location-dot"></i>
            <p className="hover-anim [--hover-color:var(--color-primary)] dark:[--hover-color:var(--color-primary2)]">
              {country}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
