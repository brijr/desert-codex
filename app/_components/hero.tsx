import { Section, Container } from "@/components/ds";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero.jpeg";

export const Hero = () => {
  return (
    <Section>
      <Container className="!p-0">
        <div className="px-4 py-4 sm:px-6 sm:py-6">
          <h1 className="text-6xl font-serif uppercase">Desert Codex</h1>
          <h2>Systems, interfaces, intelligence</h2>
          <h3 className="text-muted-foreground">
            I design and build for founders — new products and the iterations
            that matter. Brand, interface, code.
          </h3>
          <Link className="block" href="/">
            Let&apos;s build something &rarr;
          </Link>
        </div>

        <Image
          src={HeroImage}
          alt="Hero Image"
          className="aspect-video object-cover"
          placeholder="blur"
        />
      </Container>
    </Section>
  );
};
