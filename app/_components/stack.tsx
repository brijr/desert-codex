import { Section, Container } from "@/components/ds";

const stack = [
  {
    category: "Design",
    tools: ["Figma", "Framer", "After Effects", "Illustrator"],
  },
  {
    category: "Development",
    tools: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    category: "Infrastructure",
    tools: ["Vercel", "Supabase", "Cloudflare", "GitHub"],
  },
];

export const Stack = () => {
  return (
    <Section>
      <Container className="!p-0">
        <h3 className="px-4 py-4 sm:px-6 sm:pt-6">Stack</h3>
        <div className="grid sm:grid-cols-3 border-t border-border bg-border gap-px">
          {stack.map((group) => (
            <div key={group.category} className="bg-background p-4 sm:p-6">
              <span className="text-muted-foreground text-sm">
                {group.category}
              </span>
              <ul className="mt-2 space-y-1">
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
