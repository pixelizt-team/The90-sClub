import type { Metadata } from "next";

import { HighlightsStrip } from "@/components/highlights-strip";
import { WhyCards, WhyEditorial, WhySplit } from "@/components/why-variants";

export const metadata: Metadata = { title: "Why choose us options", robots: { index: false, follow: false } };

const options = [
  { id: "a", label: "Option A — Split", Section: WhySplit },
  { id: "b", label: "Option B — Four cards", Section: WhyCards },
  { id: "c", label: "Option C — Editorial list", Section: WhyEditorial },
] as const;

export default function WhyPreviewPage() {
  return (
    <div className="bg-ivory">
      <div className="lux-container pt-32 pb-10 lg:pt-40">
        <p className="eyebrow text-gold-ink">Internal preview</p>
        <h1 className="lux-h2 mt-4 text-ink">Why choose us, three layouts</h1>
      </div>
      {options.map(({ id, label, Section }) => (
        <div key={id} id={id}>
          <div className="border-y border-gold/40 bg-gold/10">
            <div className="lux-container py-4">
              <p className="font-heading text-2xl text-ink">{label}</p>
            </div>
          </div>
          <div className="h-40 bg-black" aria-hidden="true" />
          <Section />
          <HighlightsStrip />
        </div>
      ))}
    </div>
  );
}
