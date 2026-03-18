import React, { Suspense, lazy } from "react";
import HeroSection from "../components/sections/About/HeroSection";

// Synchronous Skeleton Imports
import AboutSkeleton from "../components/skeletons/About/AboutSkeleton";
import FutureSkeleton from "../components/skeletons/About/FutureSkeleton";
import ImpactSkeleton from "../components/skeletons/About/ImpactSkeleton";
import ProcessSkeleton from "../components/skeletons/About/ProcessSkeleton";
import SchoolsSkeleton from "../components/skeletons/About/SchoolsSkeleton";

const AboutSection = lazy(
  () => import("../components/sections/About/AboutSection"),
);

const FutureSection = lazy(
  () => import("../components/sections/About/FutureSection"),
);

const ImpactSection = lazy(
  () => import("../components/sections/About/ImpactSection"),
);

const ProcessSection = lazy(
  () => import("../components/sections/About/ProcessSection"),
);

const SchoolsSection = lazy(
  () => import("../components/sections/About/SchoolsSection"),
);

export default function About() {
  return (
    <div className="bg-(--color-bg-primary) flex-1">
      <HeroSection />

      <Suspense fallback={<AboutSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<ProcessSkeleton />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<ImpactSkeleton />}>
        <ImpactSection />
      </Suspense>

      <Suspense fallback={<SchoolsSkeleton />}>
        <SchoolsSection />
      </Suspense>

      <Suspense fallback={<FutureSkeleton />}>
        <FutureSection />
      </Suspense>
    </div>
  );
}
