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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '../scroll-reveal';

const tokenomicsData = [
  { name: 'Staking Rewards', value: 46.8, color: 'hsl(var(--primary))' },
  { name: 'Pre-sale', value: 28, color: 'hsl(var(--accent))' },
  { name: 'Liquidity', value: 16, color: 'hsl(var(--foreground))' },
  { name: 'Airdrop', value: 4, color: 'hsl(var(--secondary))' },
  { name: 'Team', value: 2.4, color: 'hsl(var(--muted-foreground))' },
  { name: 'DAO', value: 2, color: 'hsl(var(--card-foreground))' },
  { name: 'Advisors', value: 0.8, color: 'hsl(var(--border))' },
];

const totalTokens = "2.5 Billion Tokens";

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Exnus Tokenomics
          </h2>
          <p className="max-w-2xl mx-auto text-center text-white/70 mb-2">
            A strategically allocated total supply of <span className="text-accent font-bold">{totalTokens}</span> to ensure a balanced, sustainable, and community-driven ecosystem.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Card className="max-w-5xl mx-auto bg-card/50 backdrop-blur-xl border-white/10 mt-12">
            <CardHeader>
              <CardTitle className="text-white">Token Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[400px]">
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
                    <Bar dataKey="value" background={{ fill: 'hsl(var(--background))' }}>
                      <LabelList dataKey="value" position="right" formatter={(value: number) => `${value}%`} style={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}/>
                      {tokenomicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-center mt-4 text-white/60">
                The pre-sale is a pivotal opportunity for early investors. As interest and utility expand, we anticipate an increase in demand, ultimately enhancing token value through scarcity.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
