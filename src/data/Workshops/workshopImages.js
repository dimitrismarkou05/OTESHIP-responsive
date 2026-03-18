// workshopImages.js

// 1. Grab images directly inside the workshops folder
const workshopModules = import.meta.glob(
  "../../assets/workshops/*.{jpg,png,jpeg,webp}",
  {
    eager: true,
    query: {
      w: "800",
      format: "webp",
      as: "url",
    },
    import: "default",
  },
);

// 2. Grab images inside the products/country subfolders
const productModules = import.meta.glob(
  "../../assets/workshops/products/*/*.{jpg,png,jpeg,webp}",
  {
    eager: true,
    query: {
      w: "800",
      format: "webp",
      as: "url",
    },
    import: "default",
  },
);

export const loadWorkshopImages = () => {
  try {
    // With eager: true, Object.values() directly returns the string URLs!
    const resolvedUrls = Object.values(workshopModules);

    return resolvedUrls.map((url, index) => ({
      id: index,
      src: url,
      alt: `Workshop image ${index + 1}`,
    }));
  } catch (error) {
    console.error("Error loading workshop images:", error);
    return [];
  }
};

// Restored & Fixed: Loads product images for a specific country synchronously
export const loadProductImages = (countryCode) => {
  try {
    const images = [];
    let index = 0;

    // Loop through the pre-resolved paths and URLs
    for (const [path, url] of Object.entries(productModules)) {
      if (path.includes(`/products/${countryCode}/`)) {
        images.push({
          id: index++,
          src: url, // Directly use the string URL, no importFn() call
          alt: `${countryCode.toUpperCase()} Product image ${index}`,
        });
      }
    }

    return images;
  } catch (error) {
    console.error(`Error loading product images for ${countryCode}:`, error);
    return [];
  }
};

export const loadRandomProductImages = (count = 6) => {
  try {
    // Get all pre-resolved string URLs
    const allUrls = Object.values(productModules);

    // Shuffle the URLs and slice the amount we need
    const shuffledUrls = [...allUrls].sort(() => 0.5 - Math.random());
    const selectedUrls = shuffledUrls.slice(0, count);

    // Format them for your components
    return selectedUrls.map((url, index) => ({
      id: index,
      src: url,
      alt: `Featured Product ${index + 1}`,
    }));
  } catch (error) {
    console.error("Error loading random product images:", error);
    return [];
  }
};

export const loadRandomWorkshopImages = (count = 1) => {
  try {
    const allUrls = Object.values(workshopModules);
    if (allUrls.length === 0) return [];

    // Shuffle the URLs and pick the requested amount
    const shuffledUrls = [...allUrls].sort(() => 0.5 - Math.random());
    const selectedUrls = shuffledUrls.slice(0, count);

    return selectedUrls.map((url, index) => ({
      id: index,
      src: url,
      alt: `Workshop image ${index + 1}`,
    }));
  } catch (error) {
    console.error("Error loading random workshop images:", error);
    return [];
  }
};
