import ConsultationProcess from "@/components/ConsultationProcess";
import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";

export default function Home() {
  return (
    <main className="pb-14">
      <Hero />
      <ProblemSolution />
      <ConsultationProcess />
      <FAQ />
      <CTAForm />
      <div className="px-6 pt-4 text-center sm:px-8 lg:px-12">
        <p className="text-sm text-[var(--foreground-soft)]">© 2026 raiRabin.com.np</p>
      </div>
    </main>
  );
}
