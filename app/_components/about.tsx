import { Section, Container } from "@/components/ds";
import Image from "next/image";
import AboutImage from "@/public/about.jpeg";

export const About = () => {
  return (
    <Section>
      <Container className="!p-0 bg-muted">
        <div className="px-4 py-4 sm:px-6 sm:pt-6">
          <h2>About</h2>

          <h3 className="text-muted-foreground">
            I&apos;m Bridger — designer and engineer based in southern Utah.
            I&apos;ve built my own products, helped startups ship, and learned
            what actually moves the needle.
          </h3>

          <p>
            If you&apos;re building something new — or pushing your product to
            what&apos;s next — and need someone who can design it, brand it, and
            ship it, let&apos;s talk.
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
