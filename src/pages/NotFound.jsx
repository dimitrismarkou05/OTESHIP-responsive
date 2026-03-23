import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation("notFound");

  return (
    <div className="min-h-full flex-1 p-6 xs:p-8 sm:p-10 md:p-14 lg:p-20 xl:p-28 bg-linear-to-tl from-[#FFCC00] via-[#2E5D9E] via-40% to-[#0F2FA2] flex items-center justify-center transition-colors duration-200">
      <div className="text-center flex flex-col justify-center items-center gap-3 xs:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
        {/* 404 Header */}
        <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl md:text-9xl text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-(--color-bg-primary)">
          {t("hero.title")}
        </h2>

        {/* Description */}
        <p className="text-xs xs:text-sm md:text-base lg:text-lg xl:text-xl text-(--color-light1-text) text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          {t("hero.desc")}
        </p>

        {/* Button Wrapper */}
        <div className="pt-2 xs:pt-3 lg:pt-4">
          <Link
            to="/"
            className="cursor-pointer text-xs sm:text-sm lg:text-base py-2 xs:py-2.5 sm:py-3 px-3.5 xs:px-4 sm:px-4.5 md:px-5 lg:px-5.5 xl:px-6 bg-white text-[#2E5D9E] font-semibold border-2 border-transparent rounded-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 whitespace-nowrap text-center"
          >
            {t("hero.button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
