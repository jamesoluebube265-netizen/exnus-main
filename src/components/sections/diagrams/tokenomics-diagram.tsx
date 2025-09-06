'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from "@/components/ui/card";

const data = [
  { name: 'Staking Rewards', value: 77.2 },
  { name: 'Community Airdrop', value: 8 },
  { name: 'Liquidity Provision', value: 8 },
  { name: 'Team Allocation', value: 4 },
  { name: 'DAO Treasury', value: 2 },
  { name: 'Advisors Allocation', value: 0.8 },
];

const COLORS = ['hsl(var(--primary))', '#6b7280', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border rounded-lg bg-white/80 backdrop-blur-sm shadow-lg text-black">
        <p className="label font-bold">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};


export function TokenomicsDiagram() {
  return (
    <div className="relative w-full text-black font-sans">
        <h3 className="text-center font-bold text-lg mb-6 text-accent">Token Allocation Overview</h3>
        <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{fontSize: "14px"}}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
