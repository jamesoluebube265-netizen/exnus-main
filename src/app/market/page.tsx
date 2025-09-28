
import MarketTable from "@/components/sections/market-table";
import ScrollReveal from "@/components/scroll-reveal";

export default function MarketPage() {
  return (
    <div className="w-full space-y-8">
      <div className="header-card text-center relative overflow-hidden">
         <div 
            className="absolute inset-0"
            style={{
            backgroundImage: `url(/4.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
        <div className="relative z-10">
          <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Crypto Market
              </h1>
              <p className="text-lg text-white/80 max-w-4xl mx-auto">
              Stay updated with the latest cryptocurrency prices and market trends.
              </p>
          </ScrollReveal>
        </div>
      </div>
      <ScrollReveal delay={200}>
        <div>
            <MarketTable />
        </div>
      </ScrollReveal>
      <section>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Navigating the Crypto Market
              </h2>
              <p className="mt-4 text-foreground/70">
                The cryptocurrency market is dynamic and volatile. Prices can change rapidly, and it's essential to stay informed and exercise caution.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 border rounded-lg bg-card relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/6.jpeg)` }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative z-10">
                  <h3 className="font-bold text-xl text-primary">Data Accuracy</h3>
                  <p className="mt-2 text-white/80">
                    The data presented on this page is aggregated from various sources and is intended for informational purposes only. While we strive for accuracy, we cannot guarantee the timeliness or completeness of the information.
                  </p>
                </div>
              </div>
              <div className="p-6 border rounded-lg bg-card relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/6.jpeg)` }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="relative z-10">
                  <h3 className="font-bold text-xl text-primary">Investment Risk</h3>
                  <p className="mt-2 text-white/80">
                    Investing in cryptocurrencies involves significant risk, including the potential for loss of principal. This is not investment advice. Always conduct your own research and consult with a qualified financial advisor before making any investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
           <p className="text-center text-foreground/60 mt-12 max-w-2xl mx-auto">
              Past performance is not indicative of future results. The value of cryptocurrencies can go down as well as up.
            </p>
      </section>
    </div>
  );
}
