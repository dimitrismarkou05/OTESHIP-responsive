import React, { Suspense, lazy } from "react";
import HeroSection from "../components/sections/Home/HeroSection";

// Synchronous Skeleton Imports
import AboutSkeleton from "../components/skeletons/Home/AboutSkeleton";
import GoalsSkeleton from "../components/skeletons/Home/GoalsSkeleton";
import SchoolsSkeleton from "../components/skeletons/Home/SchoolsSkeleton";
import CeramicsSkeleton from "../components/skeletons/Home/CeramicsSkeleton";
import ContactSkeleton from "../components/skeletons/Home/ContactSkeleton";

const AboutSection = lazy(
  () => import("../components/sections/Home/AboutSection"),
);

const GoalsSection = lazy(
  () => import("../components/sections/Home/GoalsSection"),
);

const SchoolsSection = lazy(
  () => import("../components/sections/Home/SchoolsSection"),
);

const CeramicsSection = lazy(
  () => import("../components/sections/Home/CeramicsSection"),
);

const ContactSection = lazy(
  () => import("../components/sections/Home/ContactSection"),
);

export default function Home() {
  return (
    <div className="bg-(--color-bg-primary) flex-1">
      <HeroSection />

      <Suspense fallback={<AboutSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<GoalsSkeleton />}>
        <GoalsSection />
      </Suspense>

      <Suspense fallback={<SchoolsSkeleton />}>
        <SchoolsSection />
      </Suspense>

      <Suspense fallback={<CeramicsSkeleton />}>
        <CeramicsSection />
      </Suspense>

      <Suspense fallback={<ContactSkeleton />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
