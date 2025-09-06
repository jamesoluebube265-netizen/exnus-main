import MarketTable from "@/components/sections/market-table";
import ScrollReveal from "@/components/scroll-reveal";

export default function MarketPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollReveal>
        <div className="text-center pt-8 md:pt-12 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Crypto Market
            </h1>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto px-4">
            Stay updated with the latest cryptocurrency prices and market trends.
            </p>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <MarketTable />
      </ScrollReveal>
    </div>
  );
}
