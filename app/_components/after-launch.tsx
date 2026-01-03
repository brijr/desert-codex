import { Section, Container } from "@/components/ds";

export const AfterLaunch = () => {
  return (
    <Section>
      <Container>
        <h2>After Launch</h2>
        <p className="mt-4">
          Most founders need support after day 60. Bug fixes, iterations, v1.1
          features.
        </p>
        <div className="mt-6">
          <p className="text-2xl sm:text-3xl tracking-tight">
            Post-Launch Retainer — $7.5k/month
          </p>
          <p className="text-muted-foreground mt-2">
            Ongoing design + engineering. Flexible scope. Cancel anytime.
          </p>
        </div>
        <p className="text-muted-foreground mt-4">
          I&apos;ll bring it up around day 45 if it makes sense.
        </p>
      </Container>
    </Section>
  );
};
