import { Main, Section, Container } from "@/components/ds";

import { clients } from "@/lib/clients";

import HeroImage from "@/public/hero.jpeg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Main className="leading-tight tracking-tight min-h-screen space-y-32 text-lg">
      <Hero />
      <WhatWeDo />
      <Clients />
    </Main>
  );
}

const Hero = () => {
  return (
    <Section>
      <Container className="grid sm:grid-cols-2">
        <div className="h-[50vh] sm:h-[75vh] overflow-hidden relative">
          <Image
            src={HeroImage}
            alt="Hero Image"
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>
        <div className="space-y-8 p-8 flex flex-col justify-between">
          <h1 className="text-6xl font-serif uppercase">Desert Codex</h1>
          <div className="space-y-1 mt-auto">
            <h2>Systems, interfaces, intelligence</h2>
            <h3 className="text-muted-foreground">
              Building interfaces and intelligence for product teams.
            </h3>
          </div>
          <Link className="block" href="/">
            Start a conversation &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
};

const WhatWeDo = () => {
  return (
    <Section>
      <Container className="px-6 sm:px-0">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-serif uppercase">Service Offerings</h3>
          <h4 className="mt-6 mb-2 text-muted-foreground">
            Product Design + Build
          </h4>
          <p>
            Full stack design engineering — from system architecture to
            pixel-level interface. For teams that need senior execution, not
            another deck of wireframes.
          </p>
          <h4 className="mt-6 mb-2 text-muted-foreground">AI Integration</h4>
          <p>
            Embedding intelligence into existing products. Smarter workflows,
            better tooling, interfaces that actually use the tech. Practical AI
            that ships.
          </p>
        </div>
      </Container>
    </Section>
  );
};

const Clients = () => {
  return (
    <Section>
      <Container className="px-6 sm:px-0">
        <h3 className="text-4xl font-serif uppercase mb-6">Trusted by</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border bg-border gap-px">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.url}
              target="_blank"
              className="flex items-center justify-center p-8 bg-background"
            >
              <Image src={client.image} alt={client.name} className="h-6" />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};
