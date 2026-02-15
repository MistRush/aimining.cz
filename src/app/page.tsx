import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { Tokenomics } from "@/components/sections/tokenomics";
import { Roadmap } from "@/components/sections/roadmap";
import { InvestorPortal } from "@/components/sections/investor-portal";
import { Waitlist } from "@/components/sections/waitlist";
import { EarningsCalculator } from "@/components/sections/earnings-calculator";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Trust />
      <ValueProps />
      <EarningsCalculator />
      <Waitlist />
      <Tokenomics />
      <Roadmap />
      <InvestorPortal />
    </main>
  );
}
