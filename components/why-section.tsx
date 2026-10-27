import { Beer, Music, PartyPopper, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

import { photos } from "@/lib/photos";

const reasons = [
  { icon: UtensilsCrossed, title: "Authentic Kerala Cuisine", copy: "Biryani, ghee roasts, seafood curries" },
  { icon: Beer, title: "Craft Beer on Tap", copy: "Fresh pints, buckets & BOGO deals" },
  { icon: Music, title: "Open till 1 AM on Event Nights", copy: "Birthdays, celebrations and special events" },
  {
    icon: PartyPopper,
    title: "Custom Parties for Every Occasion & Budget",
    copy: "Corporate events, birthdays or celebrations. Food, ambience and entertainment set to your budget.",
  },
] as const;

function Heading({ align = "left" }: { align?: "left" | "center" }) {
  const c = align === "center" ? "text-center" : "";
  return (
    <div className={c}>
      <p className="eyebrow text-gold-ink">01 — Why Choose Us</p>
      <h2 className="lux-h2 mt-4 text-ink">
        Why <em>The 90s Club</em>
      </h2>
    </div>
  );
}

/** 01 Why choose us: contained photo on the left, heading and four reasons on the right. */
export function WhySection() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lux-photo relative aspect-[4/3] lg:aspect-square lg:self-stretch lg:max-h-[520px]">
          <Image src={photos.neonBar.src} alt={photos.neonBar.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" style={{ objectPosition: photos.neonBar.position }} />
        </div>
        <div>
          <Heading />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {reasons.map(({ icon: Icon, title, copy }) => (
              <li key={title} className="flex gap-5 py-6">
                <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold" strokeWidth={1.4} />
                <div>
                  <p className="font-heading text-[1.5rem] leading-tight text-ink">{title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-ink-soft">{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
