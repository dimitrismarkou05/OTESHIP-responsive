import React, { Suspense, lazy } from "react";
import ContactSkeleton from "../components/skeletons/Home/ContactSkeleton";

const ContactSection = lazy(
  () => import("../components/sections/Home/ContactSection"),
);

export default function Contact() {
  return (
    <div className="bg-(--color-bg-primary) flex-1">
      <Suspense fallback={<ContactSkeleton />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
