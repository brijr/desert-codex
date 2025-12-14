import { Section, Container } from "@/components/ds";
import Image from "next/image";
import AboutImage from "@/public/about.jpeg";

export const About = () => {
  return (
    <Section>
      <Container className="!p-0">
        <div className="px-4 py-4 sm:px-6 sm:pt-6">
          <h2>About</h2>

          <h3 className="text-muted-foreground">
            I&apos;m Bridger — designer and engineer based in southern Utah.
            I&apos;ve built my own products, helped startups ship, and learned
            what actually matters when you&apos;re going from zero to one.
          </h3>

          <p>
            If you&apos;ve got an idea and need someone who can brand it, design
            it, and build it — not just advise — let&apos;s talk.
          </p>
        </div>
        <Image
          src={AboutImage}
          alt="About Image"
          className="aspect-video object-cover"
          placeholder="blur"
        />
      </Container>
    </Section>
  );
};
