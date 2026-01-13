import { Section, Container } from "@/components/ds";

const services = [
  {
    title: "Brand + Identity",
    description:
      "Name, logo, visual system — the foundation that makes everything else easier. A clear identity from day one, not an afterthought.",
  },
  {
    title: "Design + Interface",
    description:
      "Product design that ships. From early concepts to polished UI, built in systems that scale. No handoffs, no Figma files that collect dust.",
  },
  {
    title: "Build + Launch",
    description:
      "Full stack implementation — landing pages, apps, integrations. I write the code and get it live. You end the month with something real.",
  },
  {
    title: "AI + Automate",
    description:
      "Intelligent workflows and AI integrations. I help you ship smarter, not just faster. Finally implement AI that works for your customers.",
  },
];

export const WhatIDo = () => {
  return (
    <Section>
      <Container className="!p-0 bg-muted">
        <div className="px-4 py-4 sm:px-6 sm:pt-6">
          <h2>What I do</h2>
          <h3 className="text-muted-foreground">
            From concept to traction. New products and critical iterations.
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 border-t border-border bg-border gap-px">
          {services.map((service, i) => (
            <div key={service.title} className="bg-background p-4 sm:p-6">
              <span className="text-muted-foreground tabular-nums">
                0{i + 1}
              </span>
              <h4 className="mt-2">{service.title}</h4>
              <p className="text-muted-foreground mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
