import { Main, Section, Container } from "@/components/ds";

import { clients } from "@/lib/clients";

import HeroImage from "@/public/hero.jpeg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Main className="leading-tight tracking-tight min-h-screen font-mono space-y-16">
      <Hero />
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
        <div className="space-y-8 px-6 sm:px-0 flex flex-col justify-between">
          <h1 className="text-6xl font-serif uppercase">Desert Codex</h1>
          <div className="space-y-1 mt-auto">
            <h2 className="text-lg">Systems, interfaces, intelligence</h2>
            <h3 className="text-lg text-muted-foreground">
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

const Clients = () => {
  return (
    <Section>
      <Container className="p-6">
        <h3 className="text-2xl font-serif uppercase">Trusted by</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border bg-border gap-px">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.url}
              target="_blank"
              className="flex items-center justify-center p-4 bg-background"
            >
              <Image src={client.image} alt={client.name} />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};
