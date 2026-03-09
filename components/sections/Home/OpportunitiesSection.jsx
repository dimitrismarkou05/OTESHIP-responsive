import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import OpportunitiesCard from "../../common/OpportunitiesCard";

const OpportunitiesSection = () => {
  const { opportunitiesCardsData } = useLanguageData();
  const { t } = useTranslation("home");

  return (
    <section className="bg-linear-to-bl from-[#FFCC00] via-[#2e489e] via-40% to-[#0F2FA2] p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-4 xs:gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center gap-0.5 xs:gap-1 md:gap-2 lg:gap-3 xl:gap-4"
        >
          <h1 className="font-bold text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white">
            {t("opportunities.title")}
          </h1>
          <h1 className="text-xs xs:text-sm md:text-base xl:text-lg text-(--color-bg-primary) max-w-3xl text-center">
            {t("opportunities.description")}
          </h1>
        </div>

        {/* Applied the responsive grid layout and 4-column math trick here */}
        <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-3 gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl w-full mx-auto auto-rows-fr">
          {opportunitiesCardsData.map((card, index) => (
            <div
              key={index}
              className={`w-full flex justify-center h-full ${
                index === 2
                  ? "xs:col-span-2 xs:col-start-2 md:col-span-1 md:col-start-auto"
                  : "xs:col-span-2 md:col-span-1"
              }`}
            >
              <OpportunitiesCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                aosDelay={300 + index * 150}
                className="w-full max-w-sm h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
