import { Section, Container } from "@/components/ds";
import { clients } from "@/lib/clients";
import Image from "next/image";
import Link from "next/link";

export const SelectWork = () => {
  return (
    <Section>
      <Container className="!p-0">
        <h3 className="px-4 py-4 sm:px-6 sm:pt-6">Select work</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-border bg-border gap-px">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.url}
              target="_blank"
              className="flex items-center justify-center p-8 bg-background grayscale hover:brightness-110 transition-colors"
            >
              <Image
                src={client.image}
                alt={client.name}
                className="h-6 brightness-0 dark:brightness-100 dark:invert"
              />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};
