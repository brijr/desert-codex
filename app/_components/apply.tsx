import { Section, Container } from "@/components/ds";

export const Apply = () => {
  return (
    <Section id="apply">
      <Container className="!p-0">
        <div className="px-4 py-4 sm:px-6 sm:pt-6">
          <h2>Apply</h2>
        </div>
        <div className="border-t border-border">
          <form className="p-4 sm:p-6 space-y-6">
            <div>
              <label htmlFor="building" className="block font-medium mb-2">
                What are you building?
              </label>
              <textarea
                id="building"
                name="building"
                rows={3}
                className="w-full bg-background border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Describe your idea or product..."
              />
            </div>
            <div>
              <label htmlFor="timeline" className="block font-medium mb-2">
                What&apos;s your timeline?
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                className="w-full bg-background border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g., Start in January, launch by March"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block font-medium mb-2">
                What&apos;s your budget?
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                className="w-full bg-background border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g., $30k for the sprint"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block font-medium mb-2">
                Have you built a product before?
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                className="w-full bg-background border border-border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Yes/No — tell me about it"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <p className="text-muted-foreground">
            I review applications weekly. If it&apos;s a fit, I&apos;ll reach
            out to schedule a call.
          </p>
        </div>
      </Container>
    </Section>
  );
};
