// workshopImages.js

// 1. Grab images directly inside the workshops folder
const workshopModules = import.meta.glob(
  "../../assets/workshops/*.{jpg,png,jpeg,webp}",
  {
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
    query: {
      w: "800",
      format: "webp",
      as: "url",
    },
    import: "default",
  },
);

export const loadWorkshopImages = async () => {
  try {
    // 1. Get all the lazy-load functions from the object
    const importFunctions = Object.values(workshopModules);

    // 2. Execute all of them and wait for the URLs to resolve
    const resolvedUrls = await Promise.all(importFunctions.map((fn) => fn()));

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

// Restored & Fixed: Loads product images for a specific country
export const loadProductImages = async (countryCode) => {
  try {
    const promises = [];
    let index = 0;

    for (const [path, importFn] of Object.entries(productModules)) {
      if (path.includes(`/products/${countryCode}/`)) {
        // Execute the function to get the URL, then map it to your object format
        promises.push(
          importFn().then((url) => ({
            id: index++,
            src: url,
            alt: `${countryCode.toUpperCase()} Product image ${index}`,
          })),
        );
      }
    }

    // Wait for all the selected images to resolve
    return await Promise.all(promises);
  } catch (error) {
    console.error(`Error loading product images for ${countryCode}:`, error);
    return [];
  }
};

export const loadRandomProductImages = async (count = 6) => {
  try {
    // Get just the string paths (no images are processed yet)
    const allPaths = Object.keys(productModules);

    // Shuffle the paths and slice the amount we need
    const shuffledPaths = [...allPaths].sort(() => 0.5 - Math.random());
    const selectedPaths = shuffledPaths.slice(0, count);

    // ONLY execute the heavy import process for the 6 selected images
    const imagePromises = selectedPaths.map((path) => productModules[path]());
    const resolvedUrls = await Promise.all(imagePromises);

    // Format them for your components
    return resolvedUrls.map((url, index) => ({
      id: index,
      src: url,
      alt: `Featured Product ${index + 1}`,
    }));
  } catch (error) {
    console.error("Error loading random product images:", error);
    return [];
  }
};

export const loadRandomWorkshopImages = async (count = 1) => {
  try {
    const allPaths = Object.keys(workshopModules);
    if (allPaths.length === 0) return [];

    // Shuffle the paths and pick the requested amount (just 1 for GoalsSection)
    const shuffledPaths = [...allPaths].sort(() => 0.5 - Math.random());
    const selectedPaths = shuffledPaths.slice(0, count);

    // Only process the selected image(s)
    const imagePromises = selectedPaths.map((path) => workshopModules[path]());
    const resolvedUrls = await Promise.all(imagePromises);

    return resolvedUrls.map((url, index) => ({
      id: index,
      src: url,
      alt: `Workshop image ${index + 1}`,
    }));
  } catch (error) {
    console.error("Error loading random workshop images:", error);
    return [];
  }
};
