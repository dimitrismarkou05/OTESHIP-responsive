import React from "react";
import ImageCardSmall from "../../common/ImageCardSmall";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import SectionHeader from "../../common/SectionHeader";
import Carousel from "../../common/Carousel"; // Adjust path as needed

const ProcessSection = () => {
  const { t } = useTranslation("about");
  const { processCardsData } = useLanguageData();

  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-7 xl:gap-8 w-full max-w-7xl">
          <SectionHeader title={t("process.title")} />

          <Carousel
            items={processCardsData}
            renderItem={(card, index) => (
              <ImageCardSmall
                key={index}
                to={card.to}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
