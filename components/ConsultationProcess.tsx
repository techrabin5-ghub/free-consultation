const steps = [
  "Fill up the form",
  "Receive an email with the appointment link",
  "Fill the appointment form",
  "Join the 1:1 consultation call",
  "Get your customized digital marketing plan for FREE",
];

export default function ConsultationProcess() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Simple process
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--primary-ink)] sm:text-5xl">
            How The Free Consultation Works
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--foreground-soft)]">
            The process is simple, clear, and designed to help you get real direction for your
            business without any confusion.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(244,248,255,0.96))] p-6 text-center shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
            >
              <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(47,99,211,0.22),transparent)]" />
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#16366f,#2f63d3)] text-lg font-bold text-white shadow-[0_14px_30px_rgba(22,54,111,0.2)]">
                {index + 1}
              </div>
              <p className="mt-5 text-lg font-semibold leading-8 text-[var(--foreground)]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
