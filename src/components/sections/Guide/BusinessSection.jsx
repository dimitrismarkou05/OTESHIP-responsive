import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import { loadRandomWorkshopImages } from "../../../data/Workshops/workshopImages";

const BusinessSection = () => {
  const { t } = useTranslation("guide");
  const { entrepreneurshipStepsData } = useLanguageData();

  // State for the dynamic image
  const [randomImage, setRandomImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch the random image on mount
  useEffect(() => {
    const fetchRandomImage = async () => {
      const images = await loadRandomWorkshopImages(1);
      if (images && images.length > 0) {
        setRandomImage(images[0].src);
      }
    };
    fetchRandomImage();
  }, []);

  useEffect(() => {
    if (randomImage) {
      setIsLoaded(false);
    }
  }, [randomImage]);

  return (
    <section
      className="flex flex-col gap-8 xs:gap-10 min-h-fit scroll-mt-24 md:scroll-mt-32 w-full"
      id="entrepreneurship"
    >
      {/* Top Section: Concepts & Image */}
      <div className="flex flex-col xl:flex-row gap-6 xs:gap-8 xl:items-stretch w-full">
        {/* Left Content: Concepts */}
        <div className="flex flex-col items-start gap-4 xs:gap-5 md:gap-6 flex-[1.5]">
          <div
            className="flex flex-row items-center justify-center gap-2"
            data-aos="fade-up"
          >
            <div className="h-1 w-6 xs:w-8 bg-(--color-primary) rounded-full"></div>
            <h1 className="font-semibold text-xl xs:text-2xl md:text-3xl text-(--color-dark-text) dark:text-white">
              {t("business.title")}
            </h1>
          </div>

          <p
            className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("business.introText")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 w-full mt-2">
            {/* Understanding Concept */}
            <div
              className="bg-white p-4 xs:p-5 rounded-md drop-shadow-sm/10 border border-(--color-divider)/40 flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-2 text-(--color-primary)">
                <i className="fa-solid fa-lightbulb text-sm xs:text-base"></i>
                <h2 className="font-semibold text-(--color-dark-text) dark:text-white text-xs xs:text-sm">
                  {t("business.understandingTitle")}
                </h2>
              </div>
              <p className="text-[11px] xs:text-xs md:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed">
                {t("business.understandingDesc")}
              </p>
            </div>

            {/* Importance Concept */}
            <div
              className="bg-white p-4 xs:p-5 rounded-md drop-shadow-sm/10 border border-(--color-divider)/40 flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-2 text-(--color-gold)">
                <i className="fa-solid fa-arrow-trend-up text-sm xs:text-base"></i>
                <h2 className="font-semibold text-(--color-dark-text) dark:text-white text-xs xs:text-sm">
                  {t("business.importanceTitle")}
                </h2>
              </div>
              <p className="text-[11px] xs:text-xs md:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed">
                {t("business.importanceDesc")}
              </p>
            </div>

            {/* Forms Concept */}
            <div
              className="bg-white p-4 xs:p-5 rounded-md drop-shadow-sm/10 border border-(--color-divider)/40 flex flex-col gap-2 md:col-span-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-2 text-(--color-secondary)">
                <i className="fa-solid fa-shapes text-sm xs:text-base"></i>
                <h2 className="font-semibold text-(--color-dark-text) dark:text-white text-xs xs:text-sm">
                  {t("business.formsTitle")}
                </h2>
              </div>
              <p className="text-[11px] xs:text-xs md:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed">
                {t("business.formsDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Content: Dynamic Image (Full width on LG and below, 40% on XL) */}
        <Link
          to="/ceramics"
          className="relative rounded-md w-full xl:w-2/5 shrink-0 block overflow-hidden drop-shadow-lg h-56 xs:h-64 md:h-80 xl:h-auto xl:self-stretch bg-gray-200 dark:bg-gray-800"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div
            className={`absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse transition-opacity duration-400 ${
              isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />

          {randomImage && (
            <img
              src={randomImage}
              alt="Ceramics workshop entrepreneurship"
              onLoad={() => setIsLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </Link>
      </div>

      {/* Bottom Section: 10-Stage Table */}
      <div
        className="flex flex-col gap-3 xs:gap-4 w-full mt-2 xs:mt-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col gap-1.5">
          <h2 className="font-semibold text-lg xs:text-xl text-(--color-dark-text) dark:text-white">
            {t("business.stepsTitle")}
          </h2>
          <p className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) border-b border-(--color-divider)/50 pb-2">
            {t("business.stepsDesc")}
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto bg-white rounded-md drop-shadow-lg border border-(--color-divider)/50 mt-1 xs:mt-2">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="bg-(--color-bg-primary) text-(--color-dark-text) dark:text-white text-xs xs:text-sm border-b border-(--color-divider)/50">
                <th className="p-3 xs:p-4 font-semibold w-1/5">Stage</th>
                <th className="p-3 xs:p-4 font-semibold w-1/3">
                  What the Teacher Does
                </th>
                <th className="p-3 xs:p-4 font-semibold w-1/4">
                  Tools / Materials
                </th>
                <th className="p-3 xs:p-4 font-semibold w-1/4">
                  Expected Outcome
                </th>
              </tr>
            </thead>
            <tbody className="text-[11px] xs:text-xs md:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary)">
              {entrepreneurshipStepsData?.map((step, index) => (
                <tr
                  key={index}
                  className="border-b border-(--color-divider)/30 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors"
                >
                  <td className="p-3 xs:p-4 font-medium text-(--color-primary) align-top">
                    {step.stage}
                  </td>
                  <td className="p-3 xs:p-4 align-top leading-relaxed">
                    {step.teacher}
                  </td>
                  <td className="p-3 xs:p-4 align-top text-slate-500 dark:text-slate-400">
                    <i className="fa-solid fa-wrench text-[9px] xs:text-[10px] mr-1.5 opacity-50"></i>
                    {step.tools}
                  </td>
                  <td className="p-3 xs:p-4 align-top font-medium text-emerald-600 dark:text-emerald-400">
                    {step.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
