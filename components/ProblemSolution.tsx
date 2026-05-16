const painPoints = [
  "You are posting on Facebook and Instagram but still not getting enough inquiries.",
  "You are boosting posts and spending money, but real sales are not coming in.",
  "You are unsure which marketing strategy actually fits your business in Nepal.",
  "You may get random leads, but not the serious customers who are ready to buy.",
  "You are still depending too much on referrals or word of mouth to survive.",
  "Ads, content, landing pages, and follow-up all feel confusing and disconnected.",
];

export default function ProblemSolution() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="rounded-[2.5rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,251,255,0.95))] p-8 shadow-[var(--shadow-strong)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            For Nepal-based business owners
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--primary-ink)] sm:text-5xl">
            If digital marketing feels confusing, you are not alone.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--foreground-soft)]">
            Many business owners in Nepal are trying hard online, but the results still feel
            inconsistent. You are busy running your business, yet digital marketing keeps feeling
            like one more thing that takes time without giving you clear returns.
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--foreground-soft)]">
            In this free consultation call, I will understand your business, identify what is not
            working, and give you a clear digital marketing plan you can start implementing
            immediately.
          </p>

          <div className="mt-8 rounded-[2rem] bg-[linear-gradient(135deg,#16366f,#2f63d3)] p-6 text-white shadow-[0_24px_44px_rgba(22,54,111,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
              What you walk away with
            </p>
            <p className="mt-3 text-xl font-semibold leading-8">
              A simple digital marketing direction you can actually follow after the call.
            </p>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-[rgba(47,99,211,0.1)] bg-[linear-gradient(180deg,rgba(241,246,255,0.98),rgba(255,255,255,0.95))] p-8 shadow-[var(--shadow)] sm:p-10">
          <p className="text-lg font-semibold text-[var(--foreground)]">
            Here is what many business owners are dealing with:
          </p>

          <div className="mt-6 grid gap-4">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-[1.5rem] border border-[rgba(47,99,211,0.08)] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(22,54,111,0.05)]"
              >
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ebf2ff,#ffffff)] text-sm font-bold text-[var(--primary)] shadow-[inset_0_0_0_1px_rgba(47,99,211,0.12)]">
                  •
                </div>
                <p className="text-sm leading-7 text-[var(--foreground)] sm:text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
