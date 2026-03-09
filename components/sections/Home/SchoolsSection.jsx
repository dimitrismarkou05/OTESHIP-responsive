import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import SchoolCard from "../../common/SchoolCard";

const SchoolsSection = () => {
  const { schoolCardsData } = useLanguageData();
  const { t } = useTranslation("home");

  return (
    <section
      className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 scroll-mt-8"
      id="schools"
    >
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4"
        >
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-(--color-dark-text) dark:text-white">
            {t("schools.title")}
          </h1>
          <h1 className="text-sm md:text-base xl:text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-3xl text-center">
            {t("schools.description")}
          </h1>
        </div>

        {/* Added md:max-w-[80%] and lg:max-w-7xl here */}
        <div className="flex flex-col sm:grid sm:grid-cols-4 md:flex md:flex-col lg:flex-row items-stretch justify-center gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full max-w-7xl md:max-w-[80%] lg:max-w-7xl">
          {schoolCardsData.map((school, index) => (
            <div
              key={index}
              className={`w-full max-w-sm mx-auto sm:max-w-none flex justify-center lg:flex-1 ${
                index === 2 ? "sm:col-span-2 sm:col-start-2" : "sm:col-span-2"
              }`}
            >
              <SchoolCard
                to={school.to}
                image={school.image}
                title={school.title}
                description={school.description}
                country={school.country}
                location={school.location}
                aosDelay={300 + index * 150}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
