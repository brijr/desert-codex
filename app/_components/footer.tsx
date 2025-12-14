import { Section, Container } from "@/components/ds";
import { ModeToggle } from "@/components/mode-toggle";

export const Footer = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()}, Desert Codex by{" "}
            <a href="https://bridger.to" target="_blank">
              Bridger Tower
            </a>
            .
          </p>
          <ModeToggle />
        </div>
      </Container>
    </Section>
  );
};
