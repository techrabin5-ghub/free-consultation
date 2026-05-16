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
    </main>
  );
}
