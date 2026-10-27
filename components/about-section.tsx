import Image from "next/image";

import { photos } from "@/lib/photos";

const story = [
  "Akhil Kumar and Sathish opened The 90s Club in February 2026 on the top floor of Millennium Plaza, Hebbagodi, Hosur Road. The idea was simple: the music they grew up on, the Kerala food they missed in Electronic City, and a taproom where a Thursday night can run late.",
  "Kerala biryani, coconut fish curry and prawn ghee roast from the kitchen. Flying Fox craft beer and cocktails at the bar. Eighty seats, a fully AC room, parking at the plaza, and the music you grew up on all night. Everything in the room, from the boombox booth to the cassette-wall art, is a nod to that decade.",
];

/** 05 About: club and founders in one section. /about still lands on #story. */
export function AboutSection() {
  return (
    <section id="story" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <p className="eyebrow text-gold-ink">05 — About</p>
          <h2 className="lux-h2 mt-5 text-ink">
            Two friends, one <em>90s dream</em>
          </h2>
          <p className="mt-3 font-heading text-[1.35rem] text-ink-soft">
            A Kerala kitchen and a Flying Fox taproom under one roof.
          </p>
          <div className="mt-7 space-y-4">
            {story.map((paragraph) => (
              <p key={paragraph} className="prose-body text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="mt-9 grid gap-8 sm:grid-cols-2">
            <div>
              <span className="lux-rule block" />
              <dt className="mt-4 font-heading text-[1.4rem] leading-tight text-ink">Akhil Kumar & Sathish</dt>
              <dd className="mt-1 text-sm text-ink-soft">Founders</dd>
            </div>
            <div>
              <span className="lux-rule block" />
              <dt className="mt-4 font-heading text-[1.4rem] leading-tight text-ink">Est. February 2026</dt>
              <dd className="mt-1 text-sm text-ink-soft">Electronic City</dd>
            </div>
          </dl>
        </div>
        <div className="relative pb-16 pr-10 lg:pb-24 lg:pr-16">
          <div className="lux-photo relative aspect-[4/3]">
            <Image src={photos.interiorNeon.src} alt={photos.interiorNeon.alt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
          </div>
          <div className="lux-photo absolute right-0 bottom-0 aspect-[4/5] w-[46%] border-[6px] border-ivory shadow-[0_18px_50px_rgba(10,9,7,0.25)]">
            <Image src={photos.biryani.src} alt={photos.biryani.alt} fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
