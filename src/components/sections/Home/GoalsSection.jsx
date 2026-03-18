import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import ImageCard from "../../common/ImageCard";
import SectionHeader from "../../common/SectionHeader";
import { loadRandomWorkshopImages } from "../../../data/Workshops/workshopImages";

const GoalsSection = () => {
  const { goalsData } = useLanguageData();
  const { t } = useTranslation("home");

  // Initialize with an empty string so the img tag doesn't break while loading
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      // Fetch exactly 1 optimized image using the new function
      const images = await loadRandomWorkshopImages(1);
      if (images && images.length > 0) {
        setRandomImage(images[0].src);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <SectionHeader
          title={t("goals.title")}
          description={t("goals.description")}
        />
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl sm:max-w-lg md:max-w-7xl w-full">
          <div className="flex flex-col justify-evenly flex-1 gap-4 md:gap-6 lg:gap-7 xl:gap-8 w-full">
            {goalsData.goals.map((goal, index) => (
              <div
                key={index}
                className="flex gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4"
              >
                {/* Circle */}
                <div className="bg-(--color-primary) dark:bg-(--color-primary2) rounded-full flex items-center justify-center size-6 md:size-7 lg:size-7.5 xl:size-8 shrink-0">
                  <p className="text-xs mr-px mb-px lg:text-sm xl:text-base font-bold text-white m-0 p-0">
                    {goal.number}
                  </p>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h1 className="font-bold text-sm md:text-base lg:text-lg text-(--color-dark-text) dark:text-white">
                    {goal.title}
                  </h1>
                  <p className="text-xs md:text-sm lg:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary)">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ImageCard
            image={randomImage}
            title={goalsData.card.title}
            description={goalsData.card.description}
          />
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
