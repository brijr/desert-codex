import { Main } from "@/components/ds";

import { Hero } from "./_components/hero";
import { WhatIDo } from "./_components/what-i-do";
import { HowItWorks } from "./_components/how-it-works";
import { SelectWork } from "./_components/select-work";
import { About } from "./_components/about";
import { FAQ } from "./_components/faq";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <Main className="min-h-screen divide-y">
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <SelectWork />
      <About />
      <FAQ />
      <Footer />
    </Main>
  );
}
