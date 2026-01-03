import { Section, Container } from "@/components/ds";

const timeline = [
  {
    period: "Week 1",
    description: "Strategy + brand direction. We align on vision, scope, and priorities.",
  },
  {
    period: "Weeks 2–3",
    description: "Brand system + site design. You see it come to life.",
  },
  {
    period: "Week 4",
    description: "Marketing site live. You have something to share.",
  },
  {
    period: "Weeks 5–8",
    description: "MVP design + build. The real product takes shape.",
  },
  {
    period: "Day 60",
    description: "Product live. You're in business.",
  },
];

export const Timeline = () => {
  return (
    <Section>
      <Container className="!p-0">
        <h3 className="px-4 py-4 sm:px-6 sm:pt-6">The Timeline</h3>
        <div className="border-t border-border">
          {timeline.map((item, index) => (
            <div
              key={item.period}
              className={`grid sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 p-4 sm:px-6 ${
                index !== timeline.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="font-medium">{item.period}</span>
              <span className="text-muted-foreground">{item.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
