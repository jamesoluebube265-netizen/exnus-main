'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import ScrollReveal from '../scroll-reveal';

const tokenomicsData = [
  { name: 'Staking Rewards', value: 74.8, color: 'hsl(var(--primary))' },
  { name: 'Liquidity', value: 16, color: 'hsl(var(--foreground))' },
  { name: 'Airdrop', value: 8, color: 'hsl(var(--secondary))' },
  { name: 'Team', value: 2.4, color: 'hsl(var(--muted-foreground))' },
  { name: 'DAO', value: 2, color: 'hsl(var(--card-foreground))' },
  { name: 'Advisors', value: 0.8, color: 'hsl(var(--border))' },
];

const allocationDetails = [
    { name: 'Staking Rewards', percentage: '74.8%', amount: '1.870 Billion Tokens', description: 'The largest portion of tokens is set aside for staking rewards, encouraging token holders to participate in network validation and governance while earning additional tokens.' },
    { name: 'Liquidity Provision', percentage: '16%', amount: '400 Million Tokens', description: 'A substantial allocation to liquidity provision ensures that there will be sufficient tokens available in the market, enhancing trading efficiency and stability.' },
    { name: 'Community Airdrop', percentage: '8%', amount: '200 Million Tokens', description: 'A significant portion of tokens is reserved for community engagement through airdrops, incentivizing early adopters and community members.' },
    { name: 'Team Allocation', percentage: '2.4%', amount: '60 Million Tokens', description: 'A small allocation to the team ensures that the core development group is incentivized and aligned with the long-term success of Exnus Protocol.' },
    { name: 'DAO Treasury', percentage: '2%', amount: '50 Million Tokens', description: 'The DAO treasury is designed to fund community-driven initiatives and governance proposals, fostering decentralization and community participation.' },
    { name: 'Advisors Allocation', percentage: '0.8%', amount: '20 Million Tokens', description: 'This allocation rewards strategic advisors for their guidance and expertise in the project\'s development and market strategy.' },
];

const totalTokens = "2.5 Billion Tokens";

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Exnus Tokenomics
          </h2>
          <p className="max-w-2xl mx-auto text-center text-foreground/70 mb-2">
            A strategically allocated total supply of <span className="text-accent font-bold">{totalTokens}</span> to ensure a balanced, sustainable, and community-driven ecosystem.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="max-w-5xl mx-auto mt-12">
            <h3 className="text-foreground text-xl font-bold">Token Allocation Chart</h3>
            <div className="w-full h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tokenomicsData} layout="vertical" margin={{ left: 20, right: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="hsl(var(--foreground))"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
                    width={120}
                  />
                  <Bar dataKey="value" background={{ fill: 'hsl(var(--card))' }}>
                    <LabelList dataKey="value" position="right" formatter={(value: number) => `${value}%`} style={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}/>
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="mt-12">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-foreground text-xl font-bold">Allocation Breakdown</h3>
                <p className="text-foreground/70 mt-1">
                    The Exnus Protocol tokenomics is carefully crafted to ensure a balanced and sustainable ecosystem.
                </p>
                <div className="space-y-6 mt-6">
                    {allocationDetails.map((item) => (
                        <div key={item.name}>
                            <h4 className="font-bold text-lg text-accent">{item.name} ({item.percentage}) - <span className="font-mono text-base text-foreground/80">{item.amount}</span></h4>
                            <p className="text-foreground/80 mt-1">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
             <p className="text-sm text-center mt-8 text-foreground/60 max-w-5xl mx-auto">
                The tokenomics are designed to foster long-term growth and reward community participation, creating a robust and self-sustaining decentralized ecosystem.
              </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
