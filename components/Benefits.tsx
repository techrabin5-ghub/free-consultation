const benefits = [
  "Understand why your business is not getting consistent customers",
  "Get a clear marketing direction for your business",
  "Know what you are doing wrong in your current ads/posts",
  "Learn how to get more inquiries using Meta Ads",
  "Get a simple action plan you can actually follow",
];

export default function Benefits() {
  return (
    <section className="px-6 py-18 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
          How you benefit from this consultation
        </p>
        <div className="mt-5 flex flex-col gap-4 sm:mt-8">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-4 rounded-3xl border border-[rgba(47,99,211,0.08)] bg-[linear-gradient(180deg,#ffffff,#f6f9ff)] px-5 py-5"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(47,99,211,0.1)] text-sm font-bold text-[var(--primary)]">
                +
              </div>
              <p className="text-base leading-8 text-[var(--foreground)]">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
