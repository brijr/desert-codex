import { Section, Container } from "@/components/ds";

export const Guarantee = () => {
  return (
    <Section>
      <Container>
        <h2>The Guarantee</h2>
        <p className="mt-4">
          If I miss the 60-day deadline, I keep working at no cost until
          you&apos;re live.
        </p>
        <p className="text-muted-foreground mt-4">
          The catch: delays caused by late feedback, scope changes, or slow
          approvals extend the timeline and are billed at $5k/week. Fair is
          fair.
        </p>
      </Container>
    </Section>
  );
};
