import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";

export default function Home() {
  return (
    <main className="pb-12">
      <Hero />
      <Problem />
      <Benefits />
      <CTAForm />
    </main>
  );
}
