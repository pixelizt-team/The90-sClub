import { Beer, Music, PartyPopper, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

import { photos } from "@/lib/photos";

export const reasons = [
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
      <p className={`mt-3 font-heading text-[1.35rem] text-ink-soft ${align === "center" ? "mx-auto max-w-[40ch]" : ""}`}>
        Four things the room is built around.
      </p>
    </div>
  );
}

/** A. Split: contained photo on the left, heading and four reasons on ivory to the right. */
export function WhySplit() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lux-photo relative aspect-[4/5] lg:aspect-[3/4]">
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

/** B. Four cards: centred heading, then four equal ivory cards with gold icons. No photo. */
export function WhyCards() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container">
        <Heading align="center" />
        <ul className="mx-auto mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, copy }, i) => (
            <li key={title} className="flex flex-col bg-white px-8 py-10">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full border border-gold/50 text-gold-ink">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.4} />
                </span>
                <span className="font-heading text-[1.75rem] text-line">0{i + 1}</span>
              </div>
              <p className="mt-8 font-heading text-[1.5rem] leading-tight text-ink">{title}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** C. Editorial: heading on the left with a small photo under it, numbered reasons as hairline rows on the right. */
export function WhyEditorial() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <Heading />
          <div className="lux-photo relative mt-10 aspect-[4/3] max-w-[420px]">
            <Image src={photos.neonBar.src} alt={photos.neonBar.alt} fill sizes="420px" className="object-cover" style={{ objectPosition: photos.neonBar.position }} />
          </div>
        </div>
        <ol className="divide-y divide-line border-y border-line lg:mt-2">
          {reasons.map(({ icon: Icon, title, copy }, i) => (
            <li key={title} className="grid grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-6 py-7">
              <span className="font-heading text-[1.5rem] leading-none text-gold-ink tabular-nums">0{i + 1}</span>
              <div>
                <p className="font-heading text-[1.6rem] leading-tight text-ink">{title}</p>
                <p className="mt-2 max-w-[48ch] text-sm leading-6 text-ink-soft">{copy}</p>
              </div>
              <Icon aria-hidden="true" className="mt-1 size-5 text-gold" strokeWidth={1.4} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
