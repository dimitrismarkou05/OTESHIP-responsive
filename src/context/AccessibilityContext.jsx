// src/context/AccessibilityContext.jsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from "react";

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider",
    );
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    // Load saved settings from localStorage
    const saved = localStorage.getItem("accessibility-settings");
    return saved
      ? JSON.parse(saved)
      : {
          fontSize: "normal", // normal, large, xlarge
          contrast: "normal", // normal, high
          lineSpacing: "normal", // normal, wide
          reduceMotion: false,
          dyslexiaFont: false,
          highlightLinks: false,
          fontFamily: "default", // default, dyslexic
        };
  });

  // Apply settings to document root
  useEffect(() => {
    const root = document.documentElement;

    // Remove all existing accessibility classes
    const classesToRemove = Array.from(root.classList).filter(
      (c) =>
        c.startsWith("font-size-") ||
        c.startsWith("contrast-") ||
        c.startsWith("line-spacing-") ||
        c.startsWith("dyslexia-") ||
        c.startsWith("motion-") ||
        c.startsWith("links-"),
    );
    root.classList.remove(...classesToRemove);

    // Apply new classes
    root.classList.add(`font-size-${settings.fontSize}`);
    root.classList.add(`contrast-${settings.contrast}`);
    root.classList.add(`line-spacing-${settings.lineSpacing}`);

    if (settings.reduceMotion) {
      root.classList.add("motion-reduced");
    } else {
      root.classList.add("motion-normal");
    }

    if (settings.dyslexiaFont) {
      root.classList.add("dyslexia-enabled");
    } else {
      root.classList.add("dyslexia-disabled");
    }

    if (settings.highlightLinks) {
      root.classList.add("links-highlighted");
    } else {
      root.classList.add("links-normal");
    }

    // Update CSS variables
    const fontSizes = {
      normal: "100%",
      large: "120%",
      xlarge: "150%",
    };
    root.style.setProperty(
      "--accessibility-font-scale",
      fontSizes[settings.fontSize],
    );

    // Save to localStorage
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AccessibilityContext.Provider
      value={{ settings, updateSettings, toggleSetting }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
