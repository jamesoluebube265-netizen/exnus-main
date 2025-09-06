'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Staking Rewards', value: 46.8 },
  { name: 'Pre-sale Allocation', value: 28 },
  { name: 'Liquidity Provision', value: 16 },
  { name: 'Community Airdrop', value: 4 },
  { name: 'Team Allocation', value: 2.4 },
  { name: 'DAO Treasury', value: 2 },
  { name: 'Advisors Allocation', value: 0.8 },
];

const COLORS = ['hsl(var(--primary))', '#6b7280', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border rounded-lg bg-background/80 backdrop-blur-sm shadow-lg text-foreground">
        <p className="label font-bold">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const labelRadius = outerRadius + 30;
  const x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);
  const sx = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
  const sy = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);
  const textAnchor = x > cx ? 'start' : 'end';

  return (
    <g>
      <path d={`M${sx},${sy}L${x},${y}`} stroke="hsl(var(--muted-foreground))" fill="none" />
      <circle cx={x} cy={y} r={2} fill="hsl(var(--muted-foreground))" />
      <text x={x + (x > cx ? 1 : -1) * 8} y={y} textAnchor={textAnchor} fill="hsl(var(--foreground))" fontSize="12px" dominantBaseline="central">
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};


export function TokenomicsDiagram() {
  return (
    <div className="relative w-full font-sans">
        <h3 className="text-center font-bold text-lg mb-6 text-accent">Token Allocation Overview</h3>
        <div className="w-full h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 40, right: 50, left: 50, bottom: 40 }}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={40}
                        fill="#8884d8"
                        dataKey="value"
                        paddingAngle={2}
                        labelLine={false}
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
