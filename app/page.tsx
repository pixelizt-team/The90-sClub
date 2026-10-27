import { Star, Utensils } from "lucide-react";
import Image from "next/image";

import { AboutSection } from "@/components/about-section";
import { CraftBeerSection } from "@/components/craft-beer-section";
import { FaqList } from "@/components/faq-list";
import { GalleryGrid } from "@/components/gallery-grid";
import { HighlightsStrip } from "@/components/highlights-strip";
import { IconCircle } from "@/components/icon-circle";
import { JsonLd } from "@/components/json-ld";
import { LocationSection } from "@/components/location-section";
import { MenuPreview } from "@/components/menu-preview";
import { PartiesSection } from "@/components/parties-section";
import { PillLink } from "@/components/pill";
import { ReviewsSection } from "@/components/reviews-section";
import { SignatureDishes } from "@/components/signature-dishes";
import { WhySection } from "@/components/why-section";
import { homeFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { rating, whatsappHref, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata(seo.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(homeFaqs)} />

      {/* 03 Hero */}
      <section
        data-shot="home-hero"
        className="relative flex min-h-[38rem] items-center justify-center overflow-hidden bg-black text-ivory lg:min-h-[min(50rem,100svh)]"
      >
        <Image
          src={photos.interiorNeon.src}
          alt={photos.interiorNeon.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="lux-scrim-center absolute inset-0" />
        <div className="lux-container lux-on-photo relative z-10 flex flex-col items-center pt-32 pb-20 text-center lg:pt-40 lg:pb-24">
          <p className="lux-h3 tracking-[0.04em] text-ivory">The 90s Club</p>
          <p className="eyebrow mt-4 text-gold-highlight">Retro taproom · Electronic City, Bengaluru</p>
          <h1 className="lux-h1 mt-6 max-w-[24ch] text-ivory">
            Retro Pub & Kerala Kitchen
            <br className="hidden sm:block" /> in <em>Electronic City</em>
          </h1>
          <p className="prose-body mx-auto mt-6 max-w-[46ch] text-ivory/90">
            Kerala biryani and seafood, Flying Fox craft beer, and the music you grew up on.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PillLink href={whatsappHref(whatsappMessages.book)} tone="solid" external>
              Book a Table
            </PillLink>
            <IconCircle href="/menu" label="View menu" Icon={Utensils} tone="onDark" />
          </div>
          <p className="mt-8 inline-flex items-center gap-2.5 text-sm text-ivory/90">
            <span className="inline-flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} className="size-3.5 fill-gold text-gold" />
              ))}
            </span>
            <span className="tabular-nums">
              {rating.value} on {rating.source} · {rating.count} reviews
            </span>
          </p>
        </div>
      </section>

      {/* 01 Why choose us */}
      <WhySection />

      <HighlightsStrip />

      {/* 02 Menu */}
      <MenuPreview />

      {/* 03 Signature dishes */}
      <SignatureDishes />

      {/* 04 Craft beer & bar */}
      <CraftBeerSection />

      {/* 05 About — club intro and founders story, one section */}
      <AboutSection />

      {/* 06 Parties, events & group booking */}
      <PartiesSection />

      {/* 07 Gallery & Instagram */}
      <GalleryGrid />

      {/* 08 Google reviews */}
      <ReviewsSection />

      {/* 09 Location. Hours live here and in the footer. */}
      <LocationSection />

      {/* 10 FAQ */}
      <section id="faq" className="lux-section scroll-mt-24 bg-ivory">
        <div className="lux-container">
          <FaqList
            items={homeFaqs}
            eyebrow="10 — FAQ"
            lede="Cost for two, parking, hours and how to book."
            heading={
              <>
                Frequently asked <em>questions</em>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
