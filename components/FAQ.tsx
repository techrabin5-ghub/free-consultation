const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. This is a free 1:1 consultation call where I understand your business and give you practical digital marketing direction without charging you for the call.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "This consultation is for Nepal-based business owners who want more leads, customers, and sales but feel confused about what to do in digital marketing.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get clarity on what may be slowing your growth, what needs improvement in your marketing, and a customized plan you can start using in your business.",
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The consultation is designed as a focused 1:1 session, usually around 1 hour, so we have enough time to understand your business properly.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. Even if you only have a Facebook page, Instagram page, or are just starting, you can still book the call and get useful direction.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "You will be contacted with the next steps, including your appointment details, so we can move you toward the consultation smoothly.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. That is the main purpose of the consultation. I will help you understand what to focus on and what kind of digital marketing plan fits your business.",
  },
];

export default function FAQ() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            FAQ
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--primary-ink)] sm:text-5xl">
            Questions business owners usually ask
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-[1.8rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,249,255,0.96))] shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-strong)]"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-[rgba(47,99,211,0.035)]">
                <span className="text-base font-semibold leading-7 text-[var(--foreground)] sm:text-lg">
                  {faq.question}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#edf3ff,#ffffff)] text-lg font-bold text-[var(--primary)] shadow-[inset_0_0_0_1px_rgba(47,99,211,0.08)]">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">-</span>
                </span>
              </summary>
              <div className="border-t border-[var(--border)] bg-[linear-gradient(180deg,#ffffff,#f7faff)] px-6 py-5">
                <p className="text-sm leading-7 text-[var(--foreground-soft)] sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
