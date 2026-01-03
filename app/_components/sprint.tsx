import { Section, Container } from "@/components/ds";

const deliverables = [
  {
    title: "Brand + Identity",
    items: [
      "Logo, color system, typography, brand guidelines",
      "2 concepts, 2 rounds of revisions, final deliverable",
    ],
  },
  {
    title: "Marketing Site",
    items: [
      "Designed and built to convert",
      "Live on your domain by day 30",
    ],
  },
  {
    title: "MVP Product",
    items: [
      "Up to 7 screens, 1 core workflow",
      "Auth, dashboard, the thing that makes it work",
      "Deployed and ready for real users",
    ],
  },
  {
    title: "AI Integration",
    items: [
      "Where it actually helps, not where it's trendy",
      "Workflows, automation, or user-facing intelligence",
    ],
  },
];

export const Sprint = () => {
  return (
    <Section>
      <Container className="!p-0">
        <div className="px-4 py-4 sm:px-6 sm:pt-6">
          <h2>The Sprint</h2>
          <p className="text-2xl sm:text-3xl tracking-tight mt-2">
            Zero to One — $30k
          </p>
          <p className="text-muted-foreground mt-4">
            In 60 days, you&apos;ll have a brand, a marketing site, and a
            working product. One person. No handoffs. No bloat.
          </p>
        </div>
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <h3 className="text-muted-foreground">What&apos;s included:</h3>
        </div>
        <div className="grid sm:grid-cols-2 border-t border-border bg-border gap-px">
          {deliverables.map((deliverable) => (
            <div key={deliverable.title} className="bg-background p-4 sm:p-6">
              <h4>{deliverable.title}</h4>
              <ul className="mt-2 space-y-1">
                {deliverable.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
