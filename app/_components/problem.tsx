import { Section, Container } from "@/components/ds";

export const Problem = () => {
  return (
    <Section>
      <Container>
        <h2>The Problem</h2>
        <p className="mt-4">
          You&apos;ve got the idea. Maybe some capital. But turning it into
          something real means hiring a brand agency, a designer, a developer,
          and somehow managing all of them while running your business.
        </p>
        <p className="text-muted-foreground mt-4">
          That&apos;s 3-6 months and $75-100k — if it goes well.
        </p>
        <p className="mt-4 font-medium">There&apos;s a faster way.</p>
      </Container>
    </Section>
  );
};
