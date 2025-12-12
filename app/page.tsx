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
        <div className="p-6 flex flex-col justify-between">
          <h1 className="text-6xl font-serif uppercase">Desert Codex</h1>
          <div className="space-y-1">
            <h2 className="text-lg">Systems, interfaces, intelligence</h2>
            <h3 className="text-lg text-muted-foreground">
              Building interfaces and intelligence for product teams.
            </h3>
            <Link className="block mt-8" href="/">
              Start a conversation
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
