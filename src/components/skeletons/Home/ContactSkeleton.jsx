import React from "react";

// Internal skeleton for the individual school contact blocks
const SchoolContactInfoSkeleton = () => (
  // Border matches the subtle gray in dark mode to mimic the primary color line
  <div className="flex flex-col gap-2 border-l-2 border-gray-300 dark:border-gray-700 pl-4 w-full">
    {/* School Name Title Placeholder */}
    <div className="h-5 md:h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>

    {/* Contact Details */}
    <div className="flex flex-col gap-1.5 w-full mt-0.5">
      {/* Detail Line 1 (Email) */}
      <div className="flex items-center gap-2.5 w-full">
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
        <div className="h-4 md:h-5 lg:h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
      </div>
      {/* Detail Line 2 (Phone) */}
      <div className="flex items-center gap-2.5 w-full">
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
        <div className="h-4 md:h-5 lg:h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
      </div>
      {/* Detail Line 3 (Location) */}
      <div className="flex items-center gap-2.5 w-full">
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
        <div className="h-4 md:h-5 lg:h-6 w-2/3 max-w-sm bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
      </div>
    </div>
  </div>
);

// Internal skeleton for the Contact Form
const ContactFormSkeleton = () => (
  <div className="bg-white dark:bg-(--color-dark2-text) rounded-md p-3 xs:p-3.5 md:p-5 shadow-md w-full">
    {/* Form Title */}
    <div className="h-5 md:h-6 lg:h-7 w-1/2 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse mb-3 shrink-0"></div>

    {/* Form Fields */}
    <div className="flex flex-col gap-2.5 xs:gap-3.5 md:gap-4.5 w-full">
      {/* Input Group 1: Name */}
      <div className="flex flex-col gap-1.5 w-full">
        <div className="h-4 md:h-5 w-16 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse shrink-0"></div>
        {/* Input uses transparent bg with explicit gray-500 border in dark mode just like the real one */}
        <div className="h-8.5 xs:h-9.5 md:h-11.5 lg:h-12.5 w-full bg-gray-100 dark:bg-gray-700/50 rounded-md animate-pulse border border-gray-200 dark:border-gray-500 shrink-0"></div>
      </div>

      {/* Input Group 2: Email */}
      <div className="flex flex-col gap-1.5 w-full">
        <div className="h-4 md:h-5 w-16 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse shrink-0"></div>
        <div className="h-8.5 xs:h-9.5 md:h-11.5 lg:h-12.5 w-full bg-gray-100 dark:bg-gray-700/50 rounded-md animate-pulse border border-gray-200 dark:border-gray-500 shrink-0"></div>
      </div>

      {/* Input Group 3: Phone */}
      <div className="flex flex-col gap-1.5 w-full">
        <div className="h-4 md:h-5 w-24 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse shrink-0"></div>
        <div className="h-8.5 xs:h-9.5 md:h-11.5 lg:h-12.5 w-full bg-gray-100 dark:bg-gray-700/50 rounded-md animate-pulse border border-gray-200 dark:border-gray-500 shrink-0"></div>
      </div>

      {/* Input Group 4: Message (Textarea rows="3") */}
      <div className="flex flex-col gap-1.5 w-full">
        <div className="h-4 md:h-5 w-20 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse shrink-0"></div>
        <div className="h-16.5 xs:h-17.5 md:h-21.5 lg:h-24.5 w-full bg-gray-100 dark:bg-gray-700/50 rounded-md animate-pulse border border-gray-200 dark:border-gray-500 shrink-0"></div>
      </div>

      {/* Submit Button */}
      <div className="mt-2 w-full h-8 xs:h-10 lg:h-11 bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse shrink-0"></div>
    </div>
  </div>
);

const ContactSkeleton = () => {
  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 w-full overflow-hidden">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        {/* Section Header Skeleton */}
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 w-full">
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse shrink-0"></div>
          <div className="flex flex-col items-center gap-1 w-full max-w-3xl">
            <div className="h-4 md:h-5 xl:h-6 w-[90%] max-w-lg bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
            <div className="h-4 md:h-5 xl:h-6 w-4/5 max-w-md bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>
            <div className="h-4 md:h-5 xl:h-6 w-2/3 max-w-sm bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse block sm:hidden shrink-0"></div>
          </div>
        </div>

        {/* 2-Column Grid Layout matching ContactSection.jsx */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-9 xl:gap-10 max-w-7xl w-full mx-auto items-start">
          {/* Column 1: Contact Info */}
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl mx-auto lg:mx-0 h-full">
            {/* Title */}
            <div className="h-6 md:h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0"></div>

            {/* List of 3 Schools */}
            <div className="flex flex-col gap-6 md:gap-8 h-full justify-evenly">
              {[0, 1, 2].map((index) => (
                <SchoolContactInfoSkeleton key={index} />
              ))}
            </div>
          </div>

          {/* Column 2: The Form */}
          <div className="w-full max-w-2xl mx-auto lg:max-w-none">
            <ContactFormSkeleton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;
