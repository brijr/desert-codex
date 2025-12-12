import { Main, Section, Container } from "@/components/ds";

import HeroImage from "@/public/hero.jpeg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Main className="leading-tight tracking-tight bg-muted min-h-screen">
      <Hero />
    </Main>
  );
}

const Hero = () => {
  return (
    <Section>
      <Container className="grid grid-cols-2">
        <div className="h-[500px] overflow-hidden relative">
          <Image
            src={HeroImage}
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-6xl font-serif uppercase mb-auto">
            Desert Codex
          </h1>
          <h2 className="text-2xl">Systems, interfaces, intelligence</h2>
          <h3>
            Design engineering and AI integration for products that need to
            ship.
          </h3>
          <Link href="/">Start a conversation</Link>
        </div>
      </Container>
    </Section>
  );
};
