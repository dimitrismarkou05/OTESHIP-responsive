import React, { Suspense, lazy } from "react";
import HeroSection from "../components/sections/Workshops/HeroSection";

// Synchronous Skeleton Imports
import AboutSkeleton from "../components/skeletons/Workshops/AboutSkeleton";
import GallerySkeleton from "../components/skeletons/Workshops/GallerySectionSkeleton";

const AboutSection = lazy(
  () => import("../components/sections/Workshops/AboutSection"),
);

const GallerySection = lazy(
  () => import("../components/sections/Workshops/GallerySection"),
);

export default function Ceramics() {
  return (
    <div className="bg-(--color-bg-primary) flex-1">
      <HeroSection />
      <Suspense fallback={<AboutSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<GallerySkeleton />}>
        <GallerySection />
      </Suspense>
    </div>
  );
}
