"use client";

import { useState } from "react";

import { TataTertibAccordion } from "./tata-tertib-accordion";
import { TataTertibHero } from "./tata-tertib-hero";
import { TataTertibIntro } from "./tata-tertib-intro";

export function TataTertibContent() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="page-shell">
      <div className="page-container max-w-4xl">
        <TataTertibHero />
        <TataTertibIntro />
        <TataTertibAccordion openId={openId} onOpenChange={setOpenId} />
      </div>
    </div>
  );
}
