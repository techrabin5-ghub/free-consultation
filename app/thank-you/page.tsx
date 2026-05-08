import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border)] bg-white p-8 text-center shadow-[var(--shadow)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
          Thank you
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
          Your consultation request has been received.
        </h1>
        <p className="mt-6 text-base leading-8 text-[var(--foreground-soft)] sm:text-lg">
          Thank you for booking your free 1:1 consultation. We will review your information and
          reach out with the next steps.
        </p>

        <div className="mt-10 rounded-[1.75rem] bg-[var(--surface-soft)] p-6 text-left">
          <p className="text-lg font-semibold text-[var(--foreground)]">What happens next</p>
          <p className="mt-3 text-sm leading-7 text-[var(--foreground-soft)]">
            Please keep an eye on your email and WhatsApp. We will contact you to confirm the call
            and prepare your customized marketing consultation.
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@rairabin.com"
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            Check Email Details
          </a>
          <Link
            href="/"
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-[var(--border)] px-6 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-soft)]"
          >
            Back to Landing Page
          </Link>
        </div>
      </div>
    </main>
  );
}
