// workshopImages.js

// Tell Vite to resize to 800px width and convert to webp automatically
const imageModules = import.meta.glob(
  "../../assets/workshops/*.{jpg,png,jpeg,webp}",
  {
    eager: true,
    query: {
      w: "800", // Resize to 800px width
      format: "webp", // Convert everything to WebP
      as: "url", // Return the URL string
    },
    import: "default",
  },
);

export const loadWorkshopImages = async () => {
  try {
    const urls = Object.values(imageModules);

    return urls.map((url, index) => ({
      id: index,
      src: url,
      alt: `Workshop image ${index + 1}`,
    }));
  } catch (error) {
    console.error("Error loading workshop images:", error);
    return [];
  }
};
