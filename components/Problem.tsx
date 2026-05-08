const steps = [
  {
    title: "Step 1: Fill the form below",
    description: "We collect basic information about your business",
  },
  {
    title: "Step 2: We analyze your business",
    description: "We check your current marketing, ads, and customer flow",
  },
  {
    title: "Step 3: 1:1 Consultation call",
    description: "We give you a customized marketing plan for your business",
  },
];

export default function Problem() {
  return (
    <section className="px-6 py-18 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
            Why this call matters
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            When your business is not getting consistent customers online, growth feels uncertain.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--foreground-soft)]">
            This consultation is built to help you understand what is slowing your business down,
            where your current marketing is falling short, and what practical steps can move you
            forward.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "No confusion. No theory. Just practical steps.",
              "A simple, clear marketing direction for your business.",
              "A focused conversation designed around your current situation.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[rgba(47,99,211,0.1)] bg-[var(--surface-soft)] px-5 py-4 text-sm leading-7 text-[var(--foreground)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--primary-dark)] p-8 text-white shadow-[var(--shadow)]">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/70">
            Process of this consultation
          </p>
          <div className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-base font-bold text-[var(--primary-dark)]">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="mt-4 pl-[3.75rem] text-sm leading-7 text-white/78">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
