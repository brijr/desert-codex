import { Section, Container } from "@/components/ds";

const faqs = [
  {
    question: "What's included in a monthly engagement?",
    answer:
      "Strategy, design, and development hours. We scope work together at the start of each month.",
  },
  {
    question: "How long do engagements typically last?",
    answer:
      "Most clients work with me for 2-4 months. Some stay on for ongoing product work.",
  },
  {
    question: "What if we need to pause or cancel?",
    answer:
      "Month-to-month. No long-term contracts. Cancel anytime before the next billing cycle.",
  },
  {
    question: "Do you work with teams or just founders?",
    answer:
      "Both. I can plug into an existing team or be your entire product function.",
  },
  {
    question: "What's your availability?",
    answer:
      "I take on 2-3 clients at a time. Reach out to check current openings.",
  },
  {
    question: "How do we communicate?",
    answer: "Async-first via Slack or email. Calls as needed, not required.",
  },
];

export const FAQ = () => {
  return (
    <Section>
      <Container className="!p-0">
        <h3 className="px-4 py-4 sm:px-6 sm:pt-6">FAQ</h3>
        <div className="grid sm:grid-cols-2 border-t border-border bg-border gap-px">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-background p-4 sm:p-6">
              <h4>{faq.question}</h4>
              <p className="text-muted-foreground mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
