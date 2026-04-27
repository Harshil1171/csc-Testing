import { Suspense } from "react";
import EventsGalleryClient from "./EventsGalleryClient";

export default function EventsGalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <EventsGalleryClient />
    </Suspense>
  );
}

