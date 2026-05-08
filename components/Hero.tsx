import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-18 pt-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-center">
          <div className="rounded-full border border-[var(--border)] bg-white/85 px-5 py-3 shadow-[var(--shadow)] backdrop-blur">
            <Image
              src="/rairabin_logo_new.png"
              alt="raiRabin Digital Marketing Expert"
              width={280}
              height={64}
              priority
              className="h-auto w-[220px] sm:w-[280px]"
            />
          </div>
          <a
            href="#lead-form"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--primary)] px-6 text-base font-semibold !text-white shadow-[0_18px_30px_rgba(47,99,211,0.24)] transition hover:bg-[var(--primary-dark)] hover:!text-white visited:!text-white"
          >
            Book Free Consultation Call
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-[rgba(47,99,211,0.12)] bg-[rgba(47,99,211,0.08)] px-4 py-2 text-sm font-semibold text-[var(--primary-dark)]">
              Free 1:1 Digital Marketing Consultation
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Get More Customers for Your Business Using a Simple Digital Marketing Plan
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--foreground-soft)] sm:text-xl">
              Free 1:1 consultation where we analyze your business and show what&apos;s stopping your
              growth + what to do next
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--foreground-soft)]">
              If your business is not getting consistent customers online, this call is for you.
              We will look at your current situation and give you a simple, clear marketing
              direction for your business. No confusion. No theory. Just practical steps.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:items-start sm:flex-row sm:items-center">
              <a
                href="#lead-form"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--primary)] px-7 text-base font-semibold !text-white shadow-[0_18px_30px_rgba(47,99,211,0.24)] transition hover:bg-[var(--primary-dark)] hover:!text-white visited:!text-white"
              >
                Book Free Consultation Call
              </a>
              <p className="text-sm font-medium text-[var(--foreground-soft)]">
                Customized strategy for your business
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(237,244,255,0.96))] p-7 shadow-[var(--shadow)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Quick overview
            </p>
            <div className="mt-6 space-y-5">
              {[
                "Understand why your business is not getting consistent customers",
                "Get a clear marketing direction for your business",
                "Learn how to get more inquiries using Meta Ads",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(47,99,211,0.1)] text-[var(--primary)]">
                    ✓
                  </div>
                  <p className="text-base leading-7 text-[var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-[var(--primary-dark)] p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Limited slots
              </p>
              <p className="mt-2 text-2xl font-semibold">1:1 Consultation</p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                We keep the number of calls limited each week so every business gets a thoughtful,
                customized plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
