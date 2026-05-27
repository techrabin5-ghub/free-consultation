import Image from "next/image";

const featureCards = [
  {
    title: "Nepal-Focused",
    text: "Built for local business owners who want more clarity, better leads, and practical growth.",
  },
  {
    title: "Action-First",
    text: "No vague theory. You walk away with simple next steps you can apply after the call.",
  },
  {
    title: "1:1 Attention",
    text: "A focused consultation around your business, your bottlenecks, and your next move.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-8 sm:px-8 lg:px-12 lg:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[30rem] max-w-6xl rounded-full bg-[radial-gradient(circle,rgba(47,99,211,0.16),transparent_66%)] blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-40 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.12),transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,99,211,0.1),transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="rounded-[1.75rem] border border-[rgba(47,99,211,0.08)] bg-white px-4 py-4 shadow-[0_14px_30px_rgba(22,54,111,0.05)] sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center sm:self-auto">
              <Image
                src="/rairabin_logo_new.png"
                alt="raiRabin Digital Marketing Expert"
                width={240}
                height={54}
                priority
                className="h-auto w-[170px] sm:w-[210px] lg:w-[238px]"
              />
            </div>

            <a
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2f63d3,#214b9f)] px-7 text-sm font-semibold tracking-[0.01em] !text-white shadow-[0_18px_34px_rgba(47,99,211,0.18)] transition hover:-translate-y-0.5 hover:bg-none hover:!bg-[var(--primary-dark)] hover:!text-white visited:!text-white sm:px-8 sm:text-base"
            >
              Book Free Consultation Call
            </a>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[3rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,250,255,0.94))] px-6 py-8 shadow-[var(--shadow-strong)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(233,241,255,0.85),transparent)]" />
          <div className="absolute left-[-4rem] top-24 h-56 w-56 rounded-full border border-[rgba(47,99,211,0.06)] bg-[radial-gradient(circle,rgba(91,140,255,0.18),rgba(91,140,255,0.02))]" />
          <div className="absolute right-[-3rem] bottom-14 h-64 w-64 rounded-full border border-[rgba(47,99,211,0.05)] bg-[radial-gradient(circle,rgba(47,99,211,0.15),rgba(47,99,211,0.01))]" />
          <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(47,99,211,0.24),transparent)]" />

          <div className="relative">
            <div className="mx-auto inline-flex rounded-full border border-[rgba(47,99,211,0.12)] bg-white/88 px-5 py-2 text-sm font-semibold tracking-[0.08em] text-[var(--primary-dark)] shadow-[0_12px_24px_rgba(22,54,111,0.06)]">
              FREE 1:1 Digital Marketing Consultation
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="text-center lg:text-left">
                <h1 className="font-display text-5xl leading-[0.92] text-[var(--primary-ink)] sm:text-6xl lg:text-[5.3rem]">
                  Struggling to grow your
                  <span className="block bg-[linear-gradient(135deg,#14336d,#2f63d3)] bg-clip-text text-transparent">
                    business?
                  </span>
                </h1>

                <p className="mt-6 text-xl font-semibold leading-8 text-[var(--foreground)] sm:text-2xl">
                  Grab a FREE 1:1 Digital Marketing Consultation Call with me
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--foreground-soft)] sm:text-lg lg:mx-0">
                  In this consultation call, I&apos;ll diagnose your business and provide a
                  customized Digital Marketing Plan that you can immediately implement in your
                  business after the call.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
                  <a
                    href="#lead-form"
                    className="inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2f63d3,#214b9f)] px-9 text-base font-semibold tracking-[0.01em] !text-white shadow-[0_22px_44px_rgba(47,99,211,0.28)] transition hover:-translate-y-0.5 hover:bg-none hover:!bg-[var(--primary-dark)] hover:!text-white visited:!text-white"
                  >
                    Book Free Consultation Call
                  </a>
                  <div className="rounded-full border border-[rgba(47,99,211,0.08)] bg-white/86 px-5 py-3 text-sm font-medium text-[var(--foreground-soft)] shadow-[0_10px_24px_rgba(22,54,111,0.05)]">
                    Practical plan. No confusion. No fluff.
                  </div>
                </div>
              </div>

              <div className="rounded-[2.2rem] border border-[rgba(47,99,211,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,246,255,0.96))] p-6 shadow-[0_22px_46px_rgba(22,54,111,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  What you get on the call
                </p>
                <p className="mt-4 text-2xl font-semibold leading-9 text-[var(--primary-ink)]">
                  Clear direction on what is not working and what to do next to grow your business.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "A personalized review of your current marketing direction",
                    "Clarity on what is stopping consistent inquiries and sales",
                    "A simple action plan for your next practical marketing steps",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.2rem] border border-[rgba(47,99,211,0.08)] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(22,54,111,0.04)]"
                    >
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--primary)]" />
                      <p className="text-sm leading-7 text-[var(--foreground)]">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex rounded-full border border-[rgba(47,99,211,0.12)] bg-[rgba(47,99,211,0.08)] px-4 py-2 text-sm font-semibold text-[var(--primary-dark)]">
                    FREE 1:1 Session
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {featureCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-[1.9rem] border border-[rgba(47,99,211,0.08)] bg-white/88 px-5 py-6 text-center shadow-[0_16px_32px_rgba(22,54,111,0.05)] backdrop-blur"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#16366f,#2f63d3)] text-sm font-bold text-white shadow-[0_14px_30px_rgba(22,54,111,0.2)]">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground-soft)]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
