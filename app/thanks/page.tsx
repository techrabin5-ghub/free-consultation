import Image from "next/image";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="relative overflow-hidden px-6 py-12 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-72 max-w-5xl rounded-full bg-[radial-gradient(circle,rgba(47,99,211,0.12),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute left-10 top-40 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.12),transparent_70%)] blur-3xl" />
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="inline-flex rounded-[2rem] border border-[var(--border-strong)] bg-white px-6 py-4 shadow-[var(--shadow-strong)]">
            <Image
              src="/rairabin_logo_new.png"
              alt="raiRabin Digital Marketing Expert"
              width={320}
              height={72}
              className="h-auto w-[220px] sm:w-[280px]"
            />
          </div>
        </div>

        <div className="mt-10 rounded-[2.8rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(248,251,255,0.97))] p-8 shadow-[var(--shadow-strong)] sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              You are in
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[0.96] text-[var(--primary-ink)] sm:text-6xl">
              Wait... watch the video before you go
            </h1>
            <p className="mt-5 text-base leading-8 text-[var(--foreground-soft)] sm:text-lg">
              Before your consultation, please watch this short video so you know what to do next.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(180deg,#fbfdff,#eef4ff)] shadow-[0_20px_40px_rgba(22,54,111,0.08)]">
            <div className="aspect-video w-full">
              <iframe
                src="https://player.vimeo.com/video/1192929888"
                title="Consultation thank you video"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-[rgba(47,99,211,0.1)] bg-[linear-gradient(180deg,#f5f8ff,#edf3ff)] p-6 text-center shadow-[0_14px_28px_rgba(22,54,111,0.06)]">
            <p className="text-sm leading-7 text-[var(--foreground-soft)]">
              If you have any questions before the consultation, you can message directly on
              WhatsApp.
            </p>
            <a
              href="https://wa.me/9779714107055"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--primary)] px-8 text-base font-semibold text-white shadow-[0_18px_36px_rgba(47,99,211,0.18)] transition hover:bg-[var(--primary-dark)]"
            >
              Chat with me on WhatsApp
            </a>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
            >
              Back to the landing page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
