import React, { useState, useEffect, useRef } from "react";
import { useAccessibility } from "../../context/AccessibilityContext";

const AccessibilityMenu = () => {
  const { settings, updateSettings, toggleSetting } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Floating button styling
  const buttonClasses = `
    fixed bottom-24 right-0 z-5000
    bg-(--color-primary) hover:bg-(--color-primary-hover) 
    dark:bg-(--color-primary2) dark:hover:bg-(--color-primary2-hover)
    text-white p-3 sm:p-4 rounded-l-xl
    drop-shadow-xl cursor-pointer
    transition-all duration-300 ease-in-out
    hover:pl-5 flex items-center justify-center
  `;

  // Menu panel styling - Width caps at w-80 starting at xs (440px)
  const menuClasses = `
    fixed bottom-24 right-4 right-4 xs:right-14 sm:right-16 z-5000
    bg-white dark:bg-(--color-dark2-text)
    shadow-2xl rounded-xl
    p-4 sm:p-5 
    w-[calc(100vw-2rem)] xs:w-80
    max-h-[75vh] overflow-y-auto
    border border-gray-200 dark:border-gray-700
    transform transition-all duration-300 origin-bottom-right
    ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none invisible"}
  `;

  return (
    <div ref={menuRef} className="no-highlight">
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClasses}
        aria-label="Toggle accessibility menu"
        title="Accessibility options"
      >
        <i
          className={`fa-solid ${isOpen ? "fa-xmark" : "fa-universal-access"} text-lg sm:text-xl transition-transform duration-300`}
        ></i>
      </button>

      {/* Menu panel */}
      <div className={menuClasses}>
        <div className="flex flex-col gap-4 sm:gap-5">
          <h3 className="font-bold text-base sm:text-lg text-(--color-dark-text) dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2">
            Accessibility Options
          </h3>

          {/* Font Size */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label className="text-xs sm:text-sm font-medium text-(--color-dark-text) dark:text-white">
              Font Size
            </label>
            <div className="flex gap-1.5 sm:gap-2">
              {["normal", "large", "xlarge"].map((size) => (
                <button
                  aria-label="Change Font Size"
                  key={size}
                  onClick={() => updateSettings({ fontSize: size })}
                  className={`
                    flex-1 px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] xs:text-xs sm:text-sm rounded cursor-pointer
                    transition-all capitalize font-medium
                    ${
                      settings.fontSize === size
                        ? "bg-(--color-primary) dark:bg-(--color-primary2) text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-(--color-dark-text) dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Contrast */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label className="text-xs sm:text-sm font-medium text-(--color-dark-text) dark:text-white">
              Contrast
            </label>
            <div className="flex gap-1.5 sm:gap-2">
              {["normal", "high"].map((contrast) => (
                <button
                  aria-label="Change Contrast"
                  key={contrast}
                  onClick={() => updateSettings({ contrast })}
                  className={`
                    flex-1 px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] xs:text-xs sm:text-sm rounded cursor-pointer
                    transition-all capitalize font-medium
                    ${
                      settings.contrast === contrast
                        ? "bg-(--color-primary) dark:bg-(--color-primary2) text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-(--color-dark-text) dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900"
                    }
                  `}
                >
                  {contrast}
                </button>
              ))}
            </div>
          </div>

          {/* Line Spacing */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <label className="text-xs sm:text-sm font-medium text-(--color-dark-text) dark:text-white">
              Line Spacing
            </label>
            <div className="flex gap-1.5 sm:gap-2">
              {["normal", "wide"].map((spacing) => (
                <button
                  aria-label="Change Line Spacing"
                  key={spacing}
                  onClick={() => updateSettings({ lineSpacing: spacing })}
                  className={`
                    flex-1 px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] xs:text-xs sm:text-sm rounded cursor-pointer
                    transition-all capitalize font-medium
                    ${
                      settings.lineSpacing === spacing
                        ? "bg-(--color-primary) dark:bg-(--color-primary2) text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-(--color-dark-text) dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900"
                    }
                  `}
                >
                  {spacing}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle Options */}
          <div className="flex flex-col gap-2">
            {[
              {
                key: "reduceMotion",
                label: "Reduce Motion",
                icon: "fa-solid fa-person-walking",
              },
              {
                key: "dyslexiaFont",
                label: "Dyslexia-Friendly Font",
                icon: "fa-solid fa-book-open",
              },
              {
                key: "highlightLinks",
                label: "Highlight Links",
                icon: "fa-solid fa-link",
              },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => toggleSetting(option.key)}
                className={`
                  flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:py-2.5 rounded cursor-pointer
                  transition-all w-full text-left
                  ${
                    settings[option.key]
                      ? "bg-(--color-primary) dark:bg-(--color-primary2) text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-(--color-dark-text) dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900"
                  }
                `}
              >
                <i
                  className={`${option.icon} w-5 text-center text-xs sm:text-sm`}
                ></i>
                <span className="text-xs sm:text-sm flex-1 font-medium">
                  {option.label}
                </span>
                <i
                  className={`fa-solid ${settings[option.key] ? "fa-check" : "fa-xmark"} text-xs sm:text-sm`}
                ></i>
              </button>
            ))}
          </div>

          {/* Reset Button */}
          <button
            aria-label="Reset to Default"
            onClick={() =>
              updateSettings({
                fontSize: "normal",
                contrast: "normal",
                lineSpacing: "normal",
                reduceMotion: false,
                dyslexiaFont: false,
                highlightLinks: false,
              })
            }
            className="mt-1 sm:mt-2 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold bg-gray-200 dark:bg-gray-800 text-(--color-dark-text) dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-900 transition-all cursor-pointer"
          >
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityMenu;
