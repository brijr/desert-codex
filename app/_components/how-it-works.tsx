import { Section, Container } from "@/components/ds";
import Link from "next/link";

export const HowItWorks = () => {
  return (
    <Section>
      <Container className="!p-0">
        <div className="px-4 py-4 sm:px-6 sm:pt-6">
          <h3>How it works</h3>
          <h4 className="text-muted-foreground">
            This is a partnership, not a ticket queue.
          </h4>
        </div>
        <div className="grid sm:grid-cols-2 border-t border-border bg-border gap-px">
          <div className="bg-background p-4 sm:p-6">
            <p>
              We work together monthly — I become an extension of your team
              while you&apos;re building. Strategy, design, and code in one
              place.
            </p>
            <p className="text-muted-foreground mt-4">
              Best fit: founders building something new, or teams pushing
              what&apos;s live to the next level. You need a builder, not a
              roadmap.
            </p>
          </div>
          <div className="bg-background p-4 sm:p-6 flex flex-col justify-between gap-4">
            <div>
              <span className="text-muted-foreground text-sm">Starting at</span>
              <p className="text-2xl sm:text-3xl tracking-tight">
                $5k-$10k/month
              </p>
              <p className="text-muted-foreground mt-1">
                Async-first, focused hours, real output.
              </p>
            </div>
            <Link href="/">Start a conversation &rarr;</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
