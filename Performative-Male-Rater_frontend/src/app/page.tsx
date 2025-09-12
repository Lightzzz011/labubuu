import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import PhotoUploadHero from "@/components/upload/photo-upload-hero";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import { SimpleRoundedFaqs } from "@/components/faqs/simple-rounded-faqs";
import { MinimalCenteredFooter } from "@/components/footers/minimal-centered-footer";

export default function Page() {
  return (
    <>
      <AnimatedIndicatorNavbar />
      <PhotoUploadHero />
      <NumberedBadgeCards />
      <SimpleRoundedFaqs />
      <MinimalCenteredFooter />
    </>
  );
}