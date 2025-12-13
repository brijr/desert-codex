import { Main, Section, Container } from "@/components/ds";

import { clients } from "@/lib/clients";
import { ModeToggle } from "@/components/mode-toggle";

import AboutImage from "@/public/about.jpeg";
import HeroImage from "@/public/hero.jpeg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Main className="leading-tight tracking-tight min-h-screen space-y-32 text-lg text-pretty">
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <SelectWork />
      <About />
      <Footer />
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
              I help founders go from idea to live product — brand, design, and
              build.
            </h3>
          </div>
          <Link className="block" href="/">
            Let&apos;s build something &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
};

const WhatIDo = () => {
  return (
    <Section>
      <Container className="px-6 sm:px-0">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-serif uppercase">What I do</h3>
          <h4 className="mt-6 mb-2 text-muted-foreground">Brand + Identity</h4>
          <p>
            Name, logo, visual system — the foundation that makes everything
            else easier. A clear identity from day one, not an afterthought.
          </p>
          <h4 className="mt-6 mb-2 text-muted-foreground">
            Design + Interface
          </h4>
          <p>
            Product design that ships. From early concepts to polished UI, built
            in systems that scale. No handoffs, no Figma files that collect
            dust.
          </p>
          <h4 className="mt-6 mb-2 text-muted-foreground">Build + Launch</h4>
          <p>
            Full stack implementation — landing pages, apps, integrations. I
            write the code and get it live. You end the month with something
            real.
          </p>
        </div>
      </Container>
    </Section>
  );
};

const HowItWorks = () => {
  return (
    <Section>
      <Container className="px-6 sm:px-0">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-serif uppercase">How it works</h3>
          <p className="mt-6">This is a partnership, not a ticket queue.</p>
          <p className="mt-4">
            We work together monthly — I become an extension of your team while
            you&apos;re building. Strategy, design, and code in one place.
          </p>
          <p className="mt-4">
            Engagements start at $5k/month. Async-first, focused hours, real
            output.
          </p>
          <p className="mt-4 text-muted-foreground">
            Best fit: founders with an idea and momentum who need a builder, not
            a roadmap.
          </p>
          <Link className="block mt-6" href="/">
            Start a conversation &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
};

const SelectWork = () => {
  return (
    <Section>
      <Container className="px-6 sm:px-0">
        <h3 className="text-4xl font-serif uppercase mb-6">Select work</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border bg-border gap-px">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.url}
              target="_blank"
              className="flex items-center justify-center p-8 bg-background grayscale hover:brightness-110 transition-colors"
            >
              <Image
                src={client.image}
                alt={client.name}
                className="h-6 dark:invert"
              />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const About = () => {
  return (
    <Section>
      <Container className="grid sm:grid-cols-2">
        <div className="p-8 sm:pl-0">
          <h3 className="text-4xl font-serif uppercase mb-6">About</h3>
          <p className="mb-4">
            I&apos;m Bridger — designer and engineer based in southern Utah.
            I&apos;ve built my own products, helped startups ship, and learned
            what actually matters when you&apos;re going from zero to one.
          </p>
          <p>
            If you&apos;ve got an idea and need someone who can brand it, design
            it, and build it — not just advise — let&apos;s talk.
          </p>
        </div>
        <div className="h-[50vh] sm:h-[75vh] overflow-hidden relative">
          <Image
            src={AboutImage}
            alt="About Image"
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>
      </Container>
    </Section>
  );
};

const Footer = () => {
  return (
    <Section>
      <Container className="bg-muted p-8 border-x border-t">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="mailto:hello@desertcodex.com" className="hover:underline">
              Email
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="https://x.com/bridgertower"
              target="_blank"
              className="hover:underline"
            >
              X
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="https://github.com/brijr"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">© Desert Codex</p>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </Section>
  );
};
