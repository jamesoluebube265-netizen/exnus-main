import MarketTable from "@/components/sections/market-table";
import ScrollReveal from "@/components/scroll-reveal";

export default function MarketPage() {
  return (
    <div className="w-full">
      <ScrollReveal>
        <div className="text-center pt-16 md:pt-24 mb-10 px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crypto Market
            </h1>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
            Stay updated with the latest cryptocurrency prices and market trends.
            </p>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="px-4 md:px-6">
            <MarketTable />
        </div>
      </ScrollReveal>
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Navigating the Crypto Market
              </h2>
              <p className="mt-4 text-foreground/70">
                The cryptocurrency market is dynamic and volatile. Prices can change rapidly, and it's essential to stay informed and exercise caution.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 border border-border/50 rounded-lg bg-card/80 backdrop-blur-sm">
                <h3 className="font-bold text-xl text-primary">Data Accuracy</h3>
                <p className="mt-2 text-foreground/80">
                  The data presented on this page is aggregated from various sources and is intended for informational purposes only. While we strive for accuracy, we cannot guarantee the timeliness or completeness of the information.
                </p>
              </div>
              <div className="p-6 border border-border/50 rounded-lg bg-card/80 backdrop-blur-sm">
                <h3 className="font-bold text-xl text-primary">Investment Risk</h3>
                <p className="mt-2 text-foreground/80">
                  Investing in cryptocurrencies involves significant risk, including the potential for loss of principal. This is not investment advice. Always conduct your own research and consult with a qualified financial advisor before making any investment decisions.
                </p>
              </div>
            </div>
          </ScrollReveal>
           <p className="text-center text-foreground/60 mt-12 max-w-2xl mx-auto">
              Past performance is not indicative of future results. The value of cryptocurrencies can go down as well as up.
            </p>
        </div>
      </section>
    </div>
  );
}
