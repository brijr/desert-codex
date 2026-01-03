import { Section, Container } from "@/components/ds";

export const WhoThisIsFor = () => {
  return (
    <Section>
      <Container className="!p-0">
        <div className="px-4 py-4 sm:px-6 sm:pt-6">
          <h2>Who This Is For</h2>
        </div>
        <div className="grid sm:grid-cols-2 border-t border-border bg-border gap-px">
          <div className="bg-background p-4 sm:p-6">
            <h4>Founders who:</h4>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>— Have a real idea, not a &quot;what if&quot;</li>
              <li>— Have $30k+ ready to invest in building it</li>
              <li>— Want speed, not a 6-month roadmap</li>
              <li>— Value craft but need to ship</li>
              <li>— Can make decisions and give feedback fast</li>
            </ul>
          </div>
          <div className="bg-background p-4 sm:p-6">
            <h4 className="text-muted-foreground">This isn&apos;t for:</h4>
            <p className="mt-2 text-muted-foreground">
              People who want to &quot;explore options&quot; or need a committee
              to approve a logo.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
